let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let image = document.querySelectorAll("img");
let start = document.querySelectorAll(".slider > img:first-child");
let end = document.querySelectorAll(".slider > img:last-child");

if (start) {
	prev.setAttribute("disabled", "disabled");
};

if (end) {
	next.setAttribute("disabled", "disabled");
};
