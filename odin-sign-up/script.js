document.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm_password');
  const errorMsg = document.getElementById('password-error');

  function checkPasswordsMatch() {
    const passVal = password.value;
    const confirmVal = confirmPassword.value;

    // Reset clean state if either field is empty
    if (!passVal || !confirmVal) {
      password.classList.remove('error');
      confirmPassword.classList.remove('error');
      errorMsg.style.visibility = 'hidden';
      confirmPassword.setCustomValidity('');
      return;
    }

    // Validate match only when both fields have content
    if (passVal !== confirmVal) {
      password.classList.add('error');
      confirmPassword.classList.add('error');
      errorMsg.style.visibility = 'visible';
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      password.classList.remove('error');
      confirmPassword.classList.remove('error');
      errorMsg.style.visibility = 'hidden';
      confirmPassword.setCustomValidity('');
    }
  }

  // Bind input events
  password.addEventListener('input', checkPasswordsMatch);
  confirmPassword.addEventListener('input', checkPasswordsMatch);

  // Initialize on page load (clears error state even if browser autofills)
  checkPasswordsMatch();
});
