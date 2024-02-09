const menu = document.querySelector("#menu");
const button_open = document.querySelector("#open");
const button_close = document.querySelector("#close");

button_open.addEventListener("click", () => {
  menu.classList.add("header__menu--visible");
});

button_close.addEventListener("click", () => {
  menu.classList.remove("header__menu--visible");
});
