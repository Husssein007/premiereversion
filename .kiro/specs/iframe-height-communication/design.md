# Design Document: Iframe Height Communication

## Overview

This feature implements automatic height communication between a React application embedded in an iframe and its parent WordPress page. The solution uses the browser's `postMessage` API to send height updates and a `MutationObserver` to detect content changes, ensuring the iframe always matches its content height without requiring polling.

## Architecture

The solution follows a simple event-driven architecture:

1. **Initialization**: On application load, set up height communication and observation
2. **Height Calculation**: Read `document.documentElement.scrollHeight` to get accurate content height
3. **Message Dispatch**: Send height via `postMessage` to parent window
4. **Change Detection**: Use `MutationObserver` and resize events to detect when height might change
5. **Cleanup**: Disconnect observer on page unload

```
┌─────────────────────────────────────┐
│     Parent WordPress Page           │
│  ┌───────────────────────────────┐  │
│  │   Iframe (React App)          │  │
│  │                               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │  Height Calculator      │  │  │
│  │  │  - scrollHeight         │  │  │
│  │  └──────────┬──────────────┘  │  │
│  │             │                 │  │
│  │             ▼                 │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │  Message Dispatcher     │  │  │
│  │  │  - postMessage          │  │  │
│  │  └──────────┬──────────────┘  │  │
│  │             │                 │  │
│  │  ┌──────────▼──────────────┐  │  │
│  │  │  Change Observers       │  │  │
│  │  │  - MutationObserver     │  │  │
│  │  │  - ResizeObserver       │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
│              │ postMessage          │
│              ▼                      │
│  ┌─────────────────────────────┐   │
│  │  Message Handler            │   │
│  │  (WordPress/Parent JS)      │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

## Components and Interfaces

### Height Communication Module

**Location**: `src/main.tsx`

**Responsibilities**:
- Calculate current document height
- Send height messages to parent window
- Set up and manage observers
- Clean up resources on unload

**Key Functions**:

```typescript
function sendHeightToParent(): void
```
- Calculates `document.documentElement.scrollHeight`
- Sends message: `{ type: "AGENDA_IFRAME_HEIGHT", height: number }`
- Uses `window.parent.postMessage(message, "*")`

```typescript
function setupHeightCommunication(): void
```
- Calls `sendHeightToParent()` immediately on load
- Sets up `MutationObserver` on `document.body`
- Adds `resize` event listener to `window`
- Returns cleanup function

```typescript
function cleanup(): void
```
- Disconnects `MutationObserver`
- Removes event listeners

### Message Format

**Type**: `HeightMessage`

```typescript
interface HeightMessage {
  type: "AGENDA_IFRAME_HEIGHT";
  height: number;
}
```

**Properties**:
- `type`: Fixed string identifier for message routing
- `height`: Integer representing `scrollHeight` in pixels

### Observer Configuration

**MutationObserver Config**:
```typescript
{
  childList: true,    // Watch for added/removed nodes
  subtree: true,      // Watch entire tree
  attributes: true,   // Watch attribute changes (e.g., class changes that affect layout)
  characterData: true // Watch text content changes
}
```

**Target**: `document.body`

**Callback**: Debounced call to `sendHeightToParent()`

## Data Models

### Height State

The implementation is stateless - height is calculated on-demand rather than stored. This ensures we always send the current, accurate height.

### Debouncing

To avoid excessive messages during rapid DOM changes (e.g., animations), we implement simple debouncing:

```typescript
let debounceTimer: number | null = null;

function debouncedSendHeight(): void {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    sendHeightToParent();
    debounceTimer = null;
  }, 100); // 100ms debounce
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Height message format correctness

*For any* height value calculated from the document, the message sent to the parent should have the structure `{ type: "AGENDA_IFRAME_HEIGHT", height: <calculated_height> }` where height is a non-negative number.

**Validates: Requirements 1.2, 1.3, 1.4**

### Property 2: Height updates on content changes

*For any* DOM mutation or window resize event, the system should send an updated height message to the parent within a reasonable time window (accounting for debouncing).

**Validates: Requirements 2.1, 2.2**

### Property 3: Observer cleanup on unload

*For any* page unload event, the MutationObserver should be disconnected and event listeners should be removed to prevent memory leaks.

**Validates: Requirements 4.1**

### Property 4: Duplicate message prevention

*For any* sequence of events that don't change the document height, the system should not send duplicate height messages with the same height value consecutively.

**Validates: Requirements 4.4**

## Error Handling

### Height Calculation Failures

If `document.documentElement.scrollHeight` is unavailable or returns an invalid value:
- Default to `document.body.scrollHeight` as fallback
- If both fail, log error and skip message send
- Never send negative or NaN heights

### PostMessage Failures

If `window.parent` is unavailable (e.g., not in iframe):
- Silently skip message sending
- No error thrown (graceful degradation)

### Observer Failures

If `MutationObserver` is not supported:
- Fall back to resize-only updates
- Log warning to console

## Testing Strategy

### Unit Tests

Unit tests will verify specific examples and edge cases:

1. **Message format validation**: Verify message structure matches spec
2. **Height calculation**: Test with various document heights
3. **Debouncing behavior**: Verify rapid changes are debounced
4. **Cleanup**: Verify observers are disconnected on cleanup
5. **Edge cases**:
   - Document with no content (height = 0)
   - Very large documents
   - Missing window.parent (not in iframe)

### Property-Based Tests

Property-based tests will verify universal properties across many inputs using **fast-check** (JavaScript/TypeScript PBT library):

1. **Property 1**: Generate random height values, verify message format
2. **Property 2**: Simulate DOM mutations, verify height updates sent
3. **Property 3**: Simulate unload, verify cleanup called
4. **Property 4**: Generate sequences of same-height events, verify no duplicates

**Configuration**:
- Minimum 100 iterations per property test
- Each test tagged with: `Feature: iframe-height-communication, Property N: <property_text>`

### Integration Tests

Integration tests will verify the complete flow:

1. Load application in test iframe
2. Verify initial height message sent
3. Modify DOM content
4. Verify updated height message sent
5. Trigger resize
6. Verify height message sent
7. Unload page
8. Verify cleanup completed

## Implementation Notes

### Why MutationObserver over setInterval?

- **Efficiency**: Only triggers on actual changes, not constant polling
- **Accuracy**: Immediate response to changes, no polling delay
- **Performance**: Lower CPU usage, better battery life on mobile
- **Modern**: Standard API with excellent browser support

### Why document.documentElement.scrollHeight?

- Most accurate representation of total document height
- Includes all content, padding, and margins
- Consistent across browsers
- Recommended by MDN for iframe height calculation

### Debouncing Strategy

100ms debounce provides good balance:
- Fast enough for responsive UI
- Slow enough to batch rapid changes (animations, loading)
- Prevents message spam during complex DOM updates

### Parent Page Requirements

The parent WordPress page must implement a message listener:

```javascript
window.addEventListener('message', (event) => {
  if (event.data.type === 'AGENDA_IFRAME_HEIGHT') {
    const iframe = document.querySelector('iframe'); // or specific selector
    if (iframe) {
      iframe.style.height = event.data.height + 'px';
    }
  }
});
```

This is outside the scope of this feature but documented for completeness.
