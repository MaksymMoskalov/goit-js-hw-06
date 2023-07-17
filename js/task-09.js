const changeBtn = document.querySelector(".change-color");
const indexOfColor = document.querySelector(".color");

changeBtn.addEventListener("click", changeColorOnBody);

function changeColorOnBody() {
  const buffer = getRandomHexColor();
  document.body.style.backgroundColor = buffer;
  indexOfColor.textContent = buffer;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
