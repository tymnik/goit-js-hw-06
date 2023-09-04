const widget = document.querySelector("body");
const colorSpan = widget.querySelector(".color");
const changeColorBtn = widget.querySelector(".change-color");

changeColorBtn.addEventListener("click", getColor);
function getColor() {
  const randomColor = getRandomHexColor();

  widget.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
