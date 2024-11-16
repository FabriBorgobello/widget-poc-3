import { ROOT } from "../constants";
import { WidgetProps } from "../types";

export function createRoot(settings: WidgetProps) {
  const { position } = settings;

  const root = document.createElement("div");
  root.id = ROOT;
  root.style.position = "fixed";
  root.style.zIndex = "9999";
  root.style.overflow = "hidden";

  // Position the root based on the settings
  switch (position) {
    case "bottom-left":
      root.style.bottom = "20px";
      root.style.left = "20px";
      break;
    case "bottom-right":
    default:
      root.style.bottom = "20px";
      root.style.right = "20px";
      break;
  }

  return root;
}
