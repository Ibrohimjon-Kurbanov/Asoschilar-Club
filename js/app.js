let OpenBtn = document.querySelector(".header-hamburger");
let CloseBtn = document.querySelector(".responsive-menu-close-btn");
let menu = document.querySelector(".responsive-menu");
let navListLink = document.querySelectorAll(".nav-list .nav-link");
OpenBtn.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.classList.add("active");
});
CloseBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.classList.remove("active");
});

navListLink.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.classList.remove("active");
  });
});
