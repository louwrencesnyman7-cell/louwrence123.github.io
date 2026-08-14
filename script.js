document.querySelectorAll(".year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function handleContact(event) {
  event.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Thank you. The form is ready to be connected to your email service.";
}
