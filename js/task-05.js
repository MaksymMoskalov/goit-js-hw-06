const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
const startText = "Anonymous";

inputEl.addEventListener("input", inInput);

function inInput(event) {
  if (event.currentTarget.value.trim() === "") {
    spanEl.textContent = startText;
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
