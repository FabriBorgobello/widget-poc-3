import { ROOT } from "../constants";
import { WidgetProps } from "../types";

export function createRoot(settings: WidgetProps) {
  const { position } = settings;

  const root = document.createElement("div");
  root.id = ROOT;
  root.style.position = "fixed";
  root.style.zIndex = "9999";
  root.style.backgroundColor = "white";
  root.style.border = "1px solid #ccc";
  root.style.borderRadius = "10px";
  root.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  root.style.padding = "20px";
  root.style.display = "none";
  root.style.width = "300px";
  root.style.height = "400px";
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
