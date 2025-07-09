let formEl = document.getElementById("registration");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};

  let username = document.getElementById("usernamefield").value;
  if (username === "") {
    errors.username = "Username field can not be empty";
  }

  let passw1 = document.getElementById("passwordfield").value;
  let passw2 = document.getElementById("passwordfield2").value;

  if (passw1 === "") {
    errors.password = "Password field can not be empty";
  }

  if (passw1 !== passw2) {
    errors.password2 = "Passwords do not match";
  }

  let emailValue = document.getElementById("email").value;
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (emailValue === "") {
    errors.email = "Email field can not be empty";
  } else if (!pattern.test(emailValue)) {
    errors.email = "Your Email Is Invalid";
  }

  console.log(errors);

  this.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = " ";
  });

  for (let key in errors) {
    let errorElement = document.getElementById("error-" + key);

    if (errorElement) {
      errorElement.textContent = errors[key];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});

let emailInput = document.getElementById("email");

function emailValidation() {
  let emailValue = document.getElementById("email").value;
  let pError = document.getElementById("error-email");
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    pError.textContent = " ";
  } else if (pattern.test(emailValue)) {
    pError.innerText = "Your Email Is Valid";
    pError.style.color = "green";
  } else {
    pError.innerText = "Your Email Is Invalid";
    pError.style.color = "red";
  }
}

emailInput.addEventListener("keyup", emailValidation);