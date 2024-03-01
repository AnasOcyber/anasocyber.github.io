function copyEmail() {
  let copyText = document.getElementById("email");
  navigator.clipboard.writeText(copyText.textContent.trim());
  copyText.textContent = "Copied";
}
