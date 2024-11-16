import { animate } from "motion/mini";
import { createContainer } from "../components/container";
import { CHAT_CONTAINER } from "../constants";
import { WidgetProps } from "../types";
import { createIframe } from "../components/iframe";

export const openWidget = (settings: WidgetProps) => {
  // Check if the container already exists
  let container = document.getElementById(CHAT_CONTAINER) as HTMLDivElement;

  if (!container) {
    // Create the container dynamically
    container = createContainer();
    document.body.appendChild(container);
  }

  const iframe = createIframe(settings);
  container.appendChild(iframe);

  // Make the container visible
  container.style.display = "block";
  animate(container, { opacity: 1 });
};
