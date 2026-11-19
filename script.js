const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("active");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();
