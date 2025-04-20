// Script to switch between login and register forms
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Optional: Close button (if added)
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
