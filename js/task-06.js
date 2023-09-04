const input = document.querySelector("#validation-input");

input.addEventListener("blur", checking);

function checking() {
  const dataLength = parseInt(input.getAttribute("data-length"));
  const inputValue = input.value;

  if (inputValue.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
