import { animate } from "motion/mini";
import { createContainer } from "../components/container";
import { CHAT_CONTAINER, ROOT } from "../constants";
import { WidgetProps } from "../types";
import { createIframe } from "../components/iframe";

export const openWidget = (settings: WidgetProps) => {
  const root = document.getElementById(ROOT) as HTMLDivElement;
  if (!root) throw new Error("Root element not found");

  let container = document.getElementById(CHAT_CONTAINER) as HTMLDivElement;

  if (!container) {
    // Create the container dynamically
    container = createContainer();
    root.appendChild(container);
  }

  const iframe = createIframe(settings);
  container.appendChild(iframe);

  // Make the container visible
  container.style.display = "block";
  animate(container, { opacity: 1 });
};
