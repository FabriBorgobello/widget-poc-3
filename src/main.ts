function injectWidget() {
  const widget = document.createElement("div");
  widget.id = "my-widget";
  widget.style.border = "1px solid #ccc";
  widget.style.padding = "20px";
  widget.style.width = "300px";
  widget.style.margin = "20px auto";
  widget.style.textAlign = "center";
  widget.style.borderRadius = "8px";
  widget.style.backgroundColor = "#f9f9f9";

  widget.innerHTML = `
    <h3>Hello from Vanilla JS!</h3>
    <p>This widget is bundled with Vite.</p>
  `;

  document.body.appendChild(widget);
}

// Automatically inject the widget when the script is loaded
injectWidget();
