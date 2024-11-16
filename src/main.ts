import { createButton } from "./components/button";
import { createContainer } from "./components/container";

function injectWidget() {
  const button = createButton();
  const container = createContainer();

  // Append button and container to the document
  document.body.appendChild(button);
  document.body.appendChild(container);
}

// Automatically inject the button and square when the script is loaded
injectWidget();
