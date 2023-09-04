const userName = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");

userName.addEventListener("input", onInput);

function onInput(evt) {
  const enteredName = userName.value;
  if (enteredName !== "") {
    userNameOutput.textContent = enteredName;
  } else {
    userNameOutput.textContent = "Anonymous";
  }
  console.dir(evt.currentTarget.value);
}
