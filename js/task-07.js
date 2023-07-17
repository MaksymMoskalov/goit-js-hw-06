const InputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

InputEl.addEventListener("input", onFontChanger);

function onFontChanger() {
  textEl.style.fontSize = `${InputEl.value}px`;
}
