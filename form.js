const emailCheck = document.querySelector('#email-valid');
const emailInvalid = document.querySelector('#feeback-wrong');
const form = document.querySelector('.form-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailCheck.value;

  if (emailValue === emailValue.toLowerCase()) {
    form.submit();
  } else {
    emailInvalid.textContent = 'Email address should be typed in lower case!';
  }
});
