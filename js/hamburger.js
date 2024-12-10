console.log("hello");

const ul = document.querySelector("nav ul");
console.log(ul);
const burgerButton = document.getElementById("burger-button");
console.log(burgerButton);

const menuClose = document.getElementById("menu-close");
const menuOpen = document.getElementById("menu-open");
console.log(menuClose);
console.log(menuOpen);

function handleHamburgerButtonClick() {
  console.log("button clicked!");
  ul.classList.toggle("visible");
  menuOpen.classList.toggle("visible");
  menuClose.classList.toggle("visible");
}

burgerButton.addEventListener("click", handleHamburgerButtonClick);
