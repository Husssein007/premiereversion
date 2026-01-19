# Implementation Plan: Iframe Height Communication

## Overview

This implementation adds iframe height communication to the React Vite application by modifying `src/main.tsx` to send height updates to the parent window. The solution uses MutationObserver for efficient change detection and includes proper cleanup.

## Tasks

- [ ] 1. Implement core height communication in src/main.tsx
  - Create `sendHeightToParent()` function that calculates `document.documentElement.scrollHeight` and sends message via `window.parent.postMessage()`
  - Implement message format: `{ type: "AGENDA_IFRAME_HEIGHT", height: number }`
  - Add error handling for missing `window.parent` and invalid height values
  - Include fallback to `document.body.scrollHeight` if needed
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ]* 1.1 Write property test for height message format
  - **Property 1: Height message format correctness**
  - **Validates: Requirements 1.2, 1.3, 1.4**

- [ ] 2. Implement change detection with MutationObserver
  - Create `setupHeightCommunication()` function
  - Instantiate MutationObserver with config: `{ childList: true, subtree: true, attributes: true, characterData: true }`
  - Set observer target to `document.body`
  - Add window resize event listener
  - Call `sendHeightToParent()` on initial load
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ]* 2.1 Write property test for height updates on changes
  - **Property 2: Height updates on content changes**
  - **Validates: Requirements 2.1, 2.2**

- [ ] 3. Implement debouncing to prevent message spam
  - Create debounce mechanism with 100ms delay
  - Apply debouncing to MutationObserver callback
  - Apply debouncing to resize event handler
  - Ensure immediate send on initial load (no debounce)
  - _Requirements: 4.4_

- [ ]* 3.1 Write property test for duplicate message prevention
  - **Property 4: Duplicate message prevention**
  - **Validates: Requirements 4.4**

- [ ] 4. Implement cleanup and resource management
  - Create `cleanup()` function that disconnects MutationObserver
  - Remove resize event listener in cleanup
  - Clear any pending debounce timers
  - Add `beforeunload` event listener to call cleanup
  - _Requirements: 4.1_

- [ ]* 4.1 Write property test for observer cleanup
  - **Property 3: Observer cleanup on unload**
  - **Validates: Requirements 4.1**

- [ ] 5. Integrate height communication into main.tsx
  - Call `setupHeightCommunication()` after React root is created
  - Ensure code runs in browser environment only (not SSR)
  - Add TypeScript types for message interface
  - _Requirements: 3.1_

- [ ]* 5.1 Write unit tests for edge cases
  - Test with document height = 0
  - Test with missing window.parent (not in iframe)
  - Test with unsupported MutationObserver
  - Test cleanup on page unload
  - _Requirements: 4.2_

- [ ] 6. Clean up index.html
  - Review index.html for any existing iframe height scripts
  - Remove any old script tags related to iframe height communication
  - Verify no conflicting height-related inline scripts remain
  - _Requirements: 3.4_

- [ ] 7. Verify no problematic styles added
  - Ensure no `height: 100vh` styles in CSS files
  - Verify natural content height is preserved
  - Check that body/html elements don't have fixed heights
  - _Requirements: 3.3_

- [ ] 8. Checkpoint - Test complete flow
  - Ensure all tests pass
  - Manually test in iframe context if possible
  - Verify height messages are sent correctly
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- The implementation focuses on `src/main.tsx` as specified in requirements
- Property tests use fast-check library for TypeScript
- Debouncing prevents excessive messages during animations or rapid DOM changes
- Cleanup ensures no memory leaks from observers or event listeners
