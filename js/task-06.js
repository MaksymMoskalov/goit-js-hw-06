const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", validationOfInput);

function validationOfInput(event) {
  //   Використав Number() для приведення типів
  //   (inputEl.value.length = number ::: inputEl.dataset.length = string)
  inputEl.classList.remove("invalid", "valid");
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
