import { WidgetProps } from "./types";

declare global {
  interface Window {
    FullyAIWidget: {
      init: (settings: WidgetProps) => void;
    };
  }
}

(function () {
  const script =
    document.currentScript ||
    document.querySelector("script[data-fully-ai-widget-root]");

  if (!script) {
    console.error("Script tag not found.");
    return;
  }

  // Extract settings from `data-*` attributes
  const settings: WidgetProps = {
    companyId: script.dataset.companyId || "",
    assistantId: script.dataset.assistantId || "",
    position:
      (script.dataset.position as WidgetProps["position"]) || "bottom-right",
    delay: parseInt(script.dataset.delay || "0", 10),
  };

  const loadWidget = () => {
    const WIDGET_CDN_URL =
      "https://cdn.jsdelivr.net/gh/FabriBorgobello/widget-poc-3@0.0.8/dist/widget/my-widget.iife.js";

    const script = document.createElement("script");
    script.src = WIDGET_CDN_URL;
    script.type = "module";
    script.onload = () => {
      if (typeof window.FullyAIWidget !== "undefined") {
        window.FullyAIWidget.init(settings); // Initialize widget with settings
      } else {
        console.error(
          "FullyAI Widget: Initialization failed. FullyAIWidget is not defined."
        );
      }
    };
    document.body.appendChild(script);
  };

  // Delay loading if specified
  if (settings.delay > 0) {
    setTimeout(loadWidget, settings.delay);
  } else {
    loadWidget();
  }
})();
