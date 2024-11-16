import { createButton } from "./components/button";
import { WidgetProps } from "./types";

function init(settings: WidgetProps) {
  console.log("Initializing widget with settings:", settings);

  // Create and append the button to the document
  const button = createButton();
  document.body.appendChild(button);

  console.log("Widget initialized. Button added to the DOM.");
}

if (typeof window !== "undefined") {
  console.log("Setting FullyAIWidget on window object");
  (window as any).FullyAIWidget = { init };
}
