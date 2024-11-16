import { animate } from "motion/mini";
import { CHAT_CONTAINER } from "../constants";

export function createContainer() {
  // Container
  const container = document.createElement("div");
  container.id = CHAT_CONTAINER;
  container.style.width = "300px";
  container.style.height = "300px";
  container.style.backgroundColor = "#ffffff";
  container.style.border = "1px solid #ccc";
  container.style.borderRadius = "16px";
  container.style.display = "none"; // Initially hidden
  container.style.opacity = "0";
  container.style.overflow = "hidden"; // Ensure clean display of iframe
  container.style.position = "absolute";
  container.style.bottom = "55px"; // Position above the button (improve)
  container.style.right = "0";

  // Add a close button inside the container
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.padding = "5px 10px";
  closeButton.style.cursor = "pointer";
  closeButton.style.zIndex = "1001"; // Ensure button is above the iframe

  // Add close functionality
  closeButton.addEventListener("click", () => {
    animate(
      container,
      { opacity: 0 },
      {
        onComplete: () => {
          console.log("Animation completed");
          container.remove(); // Remove from DOM
        },
      }
    );
  });

  container.appendChild(closeButton);

  return container;
}
