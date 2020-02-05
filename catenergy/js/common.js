var link = document.querySelector(".mobile-menu");
var menu = document.querySelector(".top-menu");
var closeBtn = document.getElementById("botton-menu");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	menu.classList.toggle("menu-show");
	closeBtn.classList.toggle("mobile-menu-open");
	closeBtn.classList.toggle("mobile-menu-show");
});

