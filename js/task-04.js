const decrementBtn = document.querySelector(
  "#counter button[data-action= decrement]"
);

const spanEl = document.querySelector("#value");

const incrementBtn = document.querySelector(
  "#counter button[data-action= increment]"
);

let counterValue = 0;
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
