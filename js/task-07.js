const InputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

InputEl.addEventListener("input", onFontChanger);

function onFontChanger() {
  console.dir(textEl.style);
  textEl.style.fontSize = `${InputEl.value}px`;
}
