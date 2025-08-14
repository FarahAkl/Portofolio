const menuIcon = document.querySelector(".menu-icon");
const toggleBtn = document.getElementById("theme-toggle");

menuIcon.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("show");
});
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});
