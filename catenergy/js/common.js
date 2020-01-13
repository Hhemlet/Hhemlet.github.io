var link = document.querySelector(".mobile-menu");
var menu = document.querySelector(".top-menu");
var close = document.querySelector(".mobile-menu-show");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	menu.classList.add("menu-show");
});