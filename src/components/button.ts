import { animate } from "motion/mini";
import { MAIN_BUTTON, MAIN_CONTAINER } from "../constants";
import { createContainer } from "./container";

export function createButton() {
  const button = document.createElement("button");
  button.id = MAIN_BUTTON;
  button.textContent = "Open Square";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.margin = "20px auto";
  button.style.display = "block";

  button.addEventListener("click", () => {
    // Check if the container already exists
    let container = document.getElementById(MAIN_CONTAINER)!;

    if (!container) {
      // Create the container dynamically
      container = createContainer();
      document.body.appendChild(container);
    }

    // Make the container visible
    container.style.display = "block";
    animate(container, { opacity: 1 });
  });

  return button;
}
