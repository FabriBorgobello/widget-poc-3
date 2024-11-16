import { MAIN_BUTTON } from "../constants";

export function createButton() {
  const button = document.createElement("button");
  button.id = MAIN_BUTTON;
  button.textContent = "Open Square";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.margin = "20px auto";
  button.style.display = "block";

  return button;
}
