const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll('.sidebar a')

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active"); //if active class is already present then it is removed else added
  sidebar.classList.toggle("active");
});

// Navigation Effects
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0); //if the scroll width > 0 it adds the class toggle else removes it
});

sidebarLinks.forEach((link) => link.addEventListener('click',() => {
  menuBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
} ))

