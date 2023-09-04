const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  // console.log(email.value);
  // console.log(password.value);

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Oops! Something went wrong, check your email/password once more");
  } else {
    console.log(data);
    formEl.reset();
  }
}
