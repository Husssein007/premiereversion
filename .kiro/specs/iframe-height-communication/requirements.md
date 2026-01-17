# Requirements Document

## Introduction

This feature enables the React application to communicate its document height to a parent WordPress page when embedded in an iframe. The application is deployed on Netlify and needs to send height updates to allow the parent page to adjust the iframe size dynamically.

## Glossary

- **App**: The React application built with Vite and deployed on Netlify
- **Parent_Page**: The WordPress page that embeds the App in an iframe
- **Height_Script**: The JavaScript code that calculates and sends document height to the Parent_Page
- **PostMessage_API**: The browser API used for cross-origin communication between iframe and parent

## Requirements

### Requirement 1: Height Communication Script

**User Story:** As a WordPress site administrator, I want the embedded agenda app to communicate its height to the parent page, so that the iframe can be sized correctly without scrollbars.

#### Acceptance Criteria

1. WHEN the App loads, THE Height_Script SHALL send the document height to the Parent_Page using the PostMessage_API
2. WHEN the browser window is resized, THE Height_Script SHALL recalculate and send the updated document height to the Parent_Page
3. THE Height_Script SHALL send height updates every 500 milliseconds to handle dynamic content changes
4. WHEN sending height data, THE Height_Script SHALL use the message format `{ type: "AGENDA_HEIGHT", height: <number> }`
5. THE Height_Script SHALL calculate height using `document.documentElement.scrollHeight` or `document.body.scrollHeight` as fallback

### Requirement 2: Non-Invasive Implementation

**User Story:** As a developer, I want the height communication feature to be added without modifying existing code, so that the app's current functionality remains unchanged.

#### Acceptance Criteria

1. THE Height_Script SHALL be placed in the main HTML file just before the closing `</body>` tag
2. WHEN the Height_Script is added, THE App SHALL maintain all existing visual appearance and behavior
3. THE Height_Script SHALL NOT modify any existing code, styles, or scripts
4. WHEN the Height_Script executes, THE App SHALL NOT produce any console errors or warnings
5. THE Height_Script SHALL be implemented as inline JavaScript without requiring external dependencies
