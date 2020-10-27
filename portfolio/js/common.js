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
const menuLinks = document.querySelectorAll(".main-nav li a");
console.log(menuLinks);  


closeBtn.addEventListener("click", function () {
    menu.classList.remove("unvisible");
    menu.classList.toggle("menu-hidden");
});



// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    loop: true,
  });