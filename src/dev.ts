import { init } from "./main";

init({
  companyId: "kaleandme",
  assistantId: "e255aded-f218-4eee-9b7a-08ce3a10a092",
  position: "bottom-right",
  delay: 1000,
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Dev</h1>
  </div>
`;
