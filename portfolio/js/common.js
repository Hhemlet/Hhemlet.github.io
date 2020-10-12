
new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
    scrollHorizontally: false,
    navigation: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],
	menu: '#myMenu'
});

//methods
fullpage_api.setAllowScrolling(true);

const closeBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".main-page-nav");

closeBtn.addEventListener("click", function () {
   
    menu.classList.toggle("menu-hidden");

});

