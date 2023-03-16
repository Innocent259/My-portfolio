const emailCheck = document.querySelector('#email-valid').value;
const emailValid = document.querySelector('#email-feedback-yes')
const emailInvalid = document.querySelector('#email-feeback-wrong')
const form = document.querySelector('.form-form') 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (emailCheck === emailCheck.toLowerCase()) {
    form.submit();
  } else {
    emailInvalid.textContent = "Form will not be submitted check email again";
  }
});
