import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Iframe height communication
function sendHeightToParent() {
  const height = document.documentElement.scrollHeight;
  if (window.parent && height > 0) {
    window.parent.postMessage(
      { type: "AGENDA_IFRAME_HEIGHT", height },
      "*"
    );
  }
}

// Debounce to prevent excessive messages
let debounceTimer: number | null = null;
function debouncedSendHeight() {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(() => {
    sendHeightToParent();
  }, 100);
}

// Setup observers and listeners
function setupHeightCommunication() {
  // Send initial height
  sendHeightToParent();

  // Watch for DOM changes
  const observer = new MutationObserver(debouncedSendHeight);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });

  // Watch for window resize
  window.addEventListener("resize", debouncedSendHeight);

  // Cleanup on unload
  window.addEventListener("beforeunload", () => {
    observer.disconnect();
    window.removeEventListener("resize", debouncedSendHeight);
    if (debounceTimer) clearTimeout(debounceTimer);
  });
}

createRoot(document.getElementById("root")!).render(<App />);

// Initialize height communication after render
setupHeightCommunication();
