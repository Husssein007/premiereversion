# Implementation Plan: Iframe Height Communication

## Overview

This implementation adds a single inline JavaScript script to the main HTML file (`index.html`) that communicates document height to the parent WordPress page. The approach is minimal and non-invasive, requiring only the addition of a script tag without modifying any existing application code.

## Tasks

- [x] 1. Add height communication script to index.html
  - Locate the main `index.html` file in the project root
  - Insert the height communication script just before the closing `</body>` tag
  - The script should include: `sendHeight()` function, load event listener, resize event listener, and 500ms interval timer
  - Verify the script uses the exact message format: `{ type: "AGENDA_HEIGHT", height: h }`
  - Ensure height calculation uses `document.documentElement.scrollHeight` with `document.body.scrollHeight` fallback
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.3, 2.5_

- [ ]* 1.1 Set up testing environment for script validation
  - Install fast-check for property-based testing if not already present
  - Configure test file for DOM manipulation testing
  - Set up mocks for `parent.postMessage`, `document.documentElement`, and `document.body`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.4_

- [ ]* 1.2 Write unit tests for event listeners and interval
  - Test that `sendHeight()` is called on window load event
  - Test that `sendHeight()` is called on window resize event
  - Test that `sendHeight()` is called every 500ms using fake timers
  - Test fallback logic when `document.documentElement.scrollHeight` is unavailable
  - _Requirements: 1.1, 1.2, 1.3, 1.5_

- [ ]* 1.3 Write property test for message format consistency
  - **Property 1: Message Format Consistency**
  - **Validates: Requirements 1.4**
  - Generate random document height values
  - Verify message structure is always `{ type: "AGENDA_HEIGHT", height: <number> }`
  - Verify type is exactly "AGENDA_HEIGHT" and height is a positive number
  - Run minimum 100 iterations
  - _Requirements: 1.4_

- [ ]* 1.4 Write property test for error-free execution
  - **Property 2: Error-Free Execution**
  - **Validates: Requirements 2.4**
  - Execute the script multiple times in different DOM states
  - Verify no errors or warnings are produced in any execution
  - Run minimum 100 iterations
  - _Requirements: 2.4_

- [ ] 2. Checkpoint - Verify implementation and tests
  - Ensure the script is correctly placed in index.html
  - Ensure all tests pass (if implemented)
  - Verify no existing code, styles, or scripts were modified
  - Check that the application builds and runs without errors
  - Ask the user if questions arise

- [ ]* 3. Manual verification in browser
  - Open the application in a browser
  - Open browser console and verify no errors appear
  - Use browser DevTools to monitor postMessage calls
  - Verify messages are sent on load, resize, and every 500ms
  - Verify message format matches specification
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.2, 2.4_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster implementation
- The core implementation (Task 1) is the only required task to meet the acceptance criteria
- Testing tasks provide validation but are not strictly necessary for this simple script
- Manual verification in an actual iframe with WordPress parent page is recommended but outside the scope of automated testing
