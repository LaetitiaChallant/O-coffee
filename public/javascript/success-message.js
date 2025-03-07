document.addEventListener("DOMContentLoaded", () => {
  const successMessage = document.querySelector('#success-message');

  if(successMessage) {
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);
  }
});