import { createButton } from "./components/button";
import { createContainer } from "./components/container";
import { WidgetProps } from "./types";

function init(settings: WidgetProps) {
  console.log("Initializing widget with settings:", settings);

  const button = createButton();
  const container = createContainer();

  // Append button and container to the document
  document.body.appendChild(button);
  document.body.appendChild(container);
}

if (typeof window !== "undefined") {
  console.log("Setting FullyAIWidget on window object");
  (window as any).FullyAIWidget = { init };
}
