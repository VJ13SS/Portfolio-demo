const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-right");
const navigationItems = document.querySelector(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active"); //if active class is already present then it is removed else added
  navigation.classList.toggle("active");
});

// Navigation Effects
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0); //if the scroll width > 0 it adds the class toggle else removes it
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});
