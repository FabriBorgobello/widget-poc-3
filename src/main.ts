import { WidgetProps } from "./types";
import { openWidget } from "./events/open-widget";
import { createButton } from "./components/button";
import { createRoot } from "./components/root";

function init(settings: WidgetProps) {
  console.log("Initializing widget with settings:", settings);

  // Create root element
  const root = createRoot(settings);
  document.body.appendChild(root);

  // Create and append the button to the root element
  const button = createButton();
  button.addEventListener("click", () => openWidget(settings));
  root.appendChild(button);
}

// Expose the init function on the window object
if (typeof window !== "undefined") {
  console.log("Setting FullyAIWidget on window object");
  (window as any).FullyAIWidget = { init };
}
