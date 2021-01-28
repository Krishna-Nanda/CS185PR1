function validateEmail(email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValid = regex.test(email.toLowerCase());
  return isValid;
}
document.querySelector(".submit").addEventListener("click", function () {
  let email = document.querySelector("#email").value;
  let isEmail = validateEmail(email);
  if (isEmail) {
    document.querySelector(".message").innerHTML = "Email succesfully recorded";
  }
  else {
    document.querySelector(".message").innerHTML = "Invalid email address";

  }

});