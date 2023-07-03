const navBar = document.querySelector(".nav-bar");

const navBtn = document.querySelector("#nav-btn");

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("show-nav-bar");
});
