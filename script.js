function togglePassword() {
  const passwordInput = document.getElementById("password");
  const passwordButton = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordButton.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    passwordButton.textContent = "👁️";
  }
}
