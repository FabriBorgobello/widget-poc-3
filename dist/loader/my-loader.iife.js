(function(){"use strict";(function(){const t=document.currentScript||document.querySelector("script[data-fully-ai-widget-root]");if(!t){console.error("Script tag not found.");return}const i={companyId:t.dataset.companyId||"",assistantId:t.dataset.assistantId||"",position:t.dataset.position||"bottom-right",delay:parseInt(t.dataset.delay||"0",10)},o=()=>{const d="https://cdn.jsdelivr.net/gh/FabriBorgobello/widget-poc-3@0.0.9/dist/widget/my-widget.iife.js",e=document.createElement("script");e.src=d,e.type="module",e.onload=()=>{typeof window.FullyAIWidget<"u"?window.FullyAIWidget.init(i):console.error("FullyAI Widget: Initialization failed. FullyAIWidget is not defined.")},document.body.appendChild(e)};i.delay>0?setTimeout(o,i.delay):o()})()})();
