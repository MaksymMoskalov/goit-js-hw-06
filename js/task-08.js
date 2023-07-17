const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormValidation);

function onFormValidation(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  if (
    formElements.email.value.trim() === "" ||
    formElements.password.value.trim() === ""
  ) {
    return alert("Всі поля форми повинні бути заповнені");
  }

  const email = formElements.email.value;
  const password = formElements.password.value;
  const userData = { email, password };
  console.log(userData);
  event.currentTarget.reset();
}
