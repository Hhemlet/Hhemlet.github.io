window.onload = function() {

new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
    scrollHorizontally: false,
    navigation: true,
    anchors: ['mainPage', 'whatWeDo', 'portfolio', 'aboutUs', 'contact'],
    menu: '#myMenu',
    scrollingSpeed: 1000
});
 
//methods
fullpage_api.setAllowScrolling(true);

const closeBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".main-page-nav");
let menuLinks = document.querySelectorAll(".main-nav li a");
console.log(menuLinks);  


closeBtn.addEventListener("click", function () {
    menu.classList.remove("unvisible");
    menu.classList.toggle("menu-hidden");
});


};