import { IFRAME } from "../constants";
import { WidgetProps } from "../types";

export function createIframe(settings: WidgetProps) {
  const { companyId, assistantId } = settings;
  const URL = `https://fully-frontend-git-dev-fully.vercel.app/company/${companyId}/assistant/${assistantId}/chat`;

  const iframe = document.createElement("iframe");
  iframe.id = IFRAME;
  iframe.src = URL;
  iframe.style.position = "absolute";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  return iframe;
}
