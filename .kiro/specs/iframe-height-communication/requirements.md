# Requirements Document

## Introduction

This feature enables automatic height communication between a React application running inside an iframe and its parent WordPress page. The goal is to eliminate dual scrollbars by allowing the parent page to handle all scrolling while the iframe adjusts its height dynamically based on content changes.

## Glossary

- **Iframe_App**: The React Vite application running inside an iframe
- **Parent_Page**: The WordPress page that embeds the iframe
- **Height_Message**: A postMessage communication containing the iframe's content height
- **Content_Observer**: A MutationObserver that watches for DOM changes

## Requirements

### Requirement 1: Height Communication

**User Story:** As a developer, I want the iframe to communicate its height to the parent page, so that the parent can adjust the iframe size and eliminate dual scrollbars.

#### Acceptance Criteria

1. WHEN the Iframe_App loads, THE Iframe_App SHALL send a Height_Message to the Parent_Page containing the current document height
2. THE Height_Message SHALL use the format `{ type: "AGENDA_IFRAME_HEIGHT", height: number }`
3. THE Iframe_App SHALL calculate height using `document.documentElement.scrollHeight`
4. THE Iframe_App SHALL send Height_Messages via `window.parent.postMessage()`

### Requirement 2: Dynamic Height Updates

**User Story:** As a user, I want the iframe height to adjust automatically when content changes, so that I always see the full content without scrolling inside the iframe.

#### Acceptance Criteria

1. WHEN the window is resized, THE Iframe_App SHALL send an updated Height_Message to the Parent_Page
2. WHEN DOM content changes occur, THE Iframe_App SHALL send an updated Height_Message to the Parent_Page
3. THE Iframe_App SHALL use a MutationObserver to detect DOM changes
4. THE Content_Observer SHALL monitor the document body and all its descendants
5. THE Content_Observer SHALL observe changes to childList, subtree, and attributes

### Requirement 3: Implementation Location

**User Story:** As a developer, I want the height communication logic in the React application code, so that it's maintainable and follows modern React patterns.

#### Acceptance Criteria

1. THE Iframe_App SHALL implement height communication logic in `src/main.tsx`
2. THE Iframe_App SHALL NOT use `setInterval` for height polling
3. THE Iframe_App SHALL NOT add `height: 100vh` styles that would interfere with natural content height
4. IF `index.html` contains old iframe height scripts, THEN THE Iframe_App SHALL remove them

### Requirement 4: Production Quality

**User Story:** As a developer, I want clean, production-ready code, so that the solution is maintainable and performant.

#### Acceptance Criteria

1. THE Iframe_App SHALL clean up the MutationObserver when appropriate
2. THE Iframe_App SHALL handle edge cases gracefully (e.g., height calculation failures)
3. THE code SHALL follow React and TypeScript best practices
4. THE implementation SHALL be efficient and avoid unnecessary height updates

### Requirement 5: Single Scrollbar Experience

**User Story:** As a user, I want only one scrollbar on the page, so that scrolling is intuitive and the interface is clean.

#### Acceptance Criteria

1. WHEN the iframe is embedded in the Parent_Page, THE Parent_Page SHALL handle all scrolling
2. THE Iframe_App SHALL NOT display its own scrollbar
3. THE iframe height SHALL match the content height at all times
4. THE user experience SHALL feel like a single, unified page
