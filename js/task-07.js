const rangeInput = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

rangeInput.addEventListener("input", changeSize);
function changeSize() {
  const fontSize = rangeInput.value;
  textElement.style.fontSize = `${fontSize}px`;
  console.log(fontSize);
}
