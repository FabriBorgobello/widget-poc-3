import { animate } from "motion/mini";
import { MAIN_CONTAINER } from "../constants";

export function createContainer() {
  // Container
  const container = document.createElement("div");
  container.id = MAIN_CONTAINER;
  container.style.width = "300px";
  container.style.height = "300px";
  container.style.backgroundColor = "#ffffff";
  container.style.border = "1px solid #ccc";
  container.style.position = "fixed";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-50%, -50%)";
  container.style.display = "none"; // Initially hidden
  container.style.zIndex = "1000";
  container.style.opacity = "0";

  // Add a close button inside the container
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.padding = "5px 10px";
  closeButton.style.cursor = "pointer";

  // Add close functionality
  closeButton.addEventListener("click", () => {
    animate(
      container,
      { opacity: 0 },
      {
        onComplete: () => {
          console.log("Animation completed");
          container.style.display = "none";
        },
      }
    );
  });

  // Append close button to the container
  container.appendChild(closeButton);

  return container;
}
