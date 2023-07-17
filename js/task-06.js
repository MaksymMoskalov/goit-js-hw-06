const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", validationOfInput);
const ffff = inputEl.dataset.lengthh;

function validationOfInput(event) {
  //   Використав Number() для приведення типів
  //   (inputEl.value.length = number ::: inputEl.dataset.length = string)

  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
}
