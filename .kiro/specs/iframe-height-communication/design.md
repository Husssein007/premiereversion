# Design Document: Iframe Height Communication

## Overview

This feature adds a lightweight JavaScript script to the main HTML file that enables the React application to communicate its document height to a parent WordPress page. The solution uses the browser's `postMessage` API for cross-origin communication and implements multiple triggers (load, resize, interval) to ensure the parent page always has current height information.

The implementation is intentionally minimal and non-invasive - it adds a single inline script tag without modifying any existing application code, styles, or build configuration.

## Architecture

The solution consists of a single inline JavaScript script placed in `index.html` just before the closing `</body>` tag. This placement ensures:

1. The script executes after the DOM is fully constructed
2. No interference with React's hydration or rendering
3. No impact on the application's build process or bundle size
4. Easy visibility and maintenance

The script operates independently of the React application and uses standard browser APIs available in all modern browsers.

## Components and Interfaces

### Height Calculation Function

**Function:** `sendHeight()`

**Purpose:** Calculate the current document height and send it to the parent window

**Implementation:**
```javascript
function sendHeight() {
  const h = document.documentElement.scrollHeight || document.body.scrollHeight;
  parent.postMessage({ type: "AGENDA_HEIGHT", height: h }, "*");
}
```

**Logic:**
- Attempts to read `document.documentElement.scrollHeight` (the full height of the HTML element)
- Falls back to `document.body.scrollHeight` if the first value is unavailable
- Sends a structured message to the parent window using `postMessage`

### Event Listeners

**Load Event:**
- Triggers `sendHeight()` when the page finishes loading
- Ensures initial height is communicated after all resources are loaded

**Resize Event:**
- Triggers `sendHeight()` when the browser window is resized
- Handles responsive layout changes that affect document height

**Interval Timer:**
- Calls `sendHeight()` every 500ms
- Catches dynamic content changes (animations, lazy-loaded content, user interactions)
- Provides a safety net for height changes not captured by events

### PostMessage Interface

**Message Format:**
```javascript
{
  type: "AGENDA_HEIGHT",
  height: <number>
}
```

**Target Origin:** `"*"` (any origin)
- Allows the parent page to receive messages regardless of domain
- Appropriate for this use case since height information is not sensitive

**Receiver:** `parent` window object
- The immediate parent frame containing the iframe

## Data Models

### Message Payload

```typescript
interface HeightMessage {
  type: "AGENDA_HEIGHT";  // Message type identifier
  height: number;          // Document height in pixels
}
```

The parent WordPress page is expected to listen for messages of this type and adjust the iframe height accordingly.

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Message Format Consistency

*For any* document height value calculated by the script, the message sent via postMessage should have the structure `{ type: "AGENDA_HEIGHT", height: <number> }` where type is exactly "AGENDA_HEIGHT" and height is a positive number.

**Validates: Requirements 1.4**

### Property 2: Error-Free Execution

*For any* execution of the Height_Script (on load, resize, or interval), the script should complete without throwing errors or producing console warnings.

**Validates: Requirements 2.4**

## Error Handling

The script is designed to be fault-tolerant:

1. **Height Calculation Fallback:** If `document.documentElement.scrollHeight` is unavailable, the script falls back to `document.body.scrollHeight`
2. **No Error Propagation:** The script uses simple, well-supported browser APIs that won't throw errors in modern browsers
3. **Graceful Degradation:** If the parent window doesn't listen for messages, the script continues to function without errors (messages are simply ignored)

The script does not include explicit try-catch blocks because:
- The operations are simple and unlikely to fail
- Adding error handling would increase complexity for minimal benefit
- Any errors would be visible in the browser console for debugging

## Testing Strategy

### Unit Tests

Unit tests will verify specific behaviors and edge cases:

1. **Load Event Test:** Verify `sendHeight()` is called when the window load event fires
2. **Resize Event Test:** Verify `sendHeight()` is called when the window resize event fires
3. **Interval Test:** Verify `sendHeight()` is called every 500ms using fake timers
4. **Fallback Logic Test:** Verify the script uses `document.body.scrollHeight` when `document.documentElement.scrollHeight` is unavailable
5. **PostMessage Call Test:** Verify `parent.postMessage` is called with correct arguments

### Property-Based Tests

Property-based tests will verify universal properties across many inputs:

1. **Property 1 Test:** Generate random document heights and verify the message format is always correct
   - **Feature: iframe-height-communication, Property 1: Message Format Consistency**
   - Minimum 100 iterations

2. **Property 2 Test:** Execute the script multiple times in different states and verify no errors occur
   - **Feature: iframe-height-communication, Property 2: Error-Free Execution**
   - Minimum 100 iterations

### Testing Framework

- **Unit Testing:** Vitest (already configured in the project)
- **Property-Based Testing:** fast-check (JavaScript/TypeScript PBT library)
- **DOM Mocking:** jsdom (for simulating browser environment)

### Manual Verification

Some aspects require manual verification:
- Visual regression testing to ensure no UI changes
- Integration testing with the actual WordPress parent page
- Cross-browser compatibility testing
- Script placement verification in the HTML file
