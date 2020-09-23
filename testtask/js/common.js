const closeBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".main-nav")


closeBtn.addEventListener("click", function () {
	menu.classList.toggle("menu-hidden");
});