// Create function to display error message
function displayErrorMessage(event) {
  // event.preventDefault();
  // Check email
  let email = document.querySelector("form").elements["email"].value;
  let error;
  if (email.length === 0) {
    error = true;
  } else if (!(email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
    error = true;
  }

  // Display error message
  let errorMessage = document.querySelector("#error-message");
  errorMessage.classList.remove("hide");
  let errorMargin = document.querySelector("#error-margin");
  errorMargin.classList.remove("hide");
  let emailBox = document.querySelector("#email");
  emailBox.style.border = "1px solid hsl(354, 100%, 66%)";

  // Prevent page from reloading if there is an error
  if (error === true) {
    event.preventDefault();
  }
}

// Add event listener for submit button
let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", displayErrorMessage);