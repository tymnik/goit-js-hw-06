const buttonDecr = document.querySelector(".decrease-btn");
const buttonIncr = document.querySelector(".increase-btn");
const counter = document.querySelector("#value");
let counterValue = 0;

buttonDecr.addEventListener("click", decreaseValue);

function decreaseValue(evt) {
  counterValue -= 1;
  counter.textContent = counterValue;
}

buttonIncr.addEventListener("click", increaseValue);

function increaseValue(evt) {
  counterValue += 1;
  counter.textContent = counterValue;
}
