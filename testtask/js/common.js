const closeBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".main-nav");
const body = document.querySelector("body");


closeBtn.addEventListener("click", function () {
	menu.classList.toggle("menu-hidden");
	body.classList.toggle("fixed")

});