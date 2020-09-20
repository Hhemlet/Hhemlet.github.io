

$(document).ready(function(){
  $(".single-item").slick({
  	dots: true,
  	AdaptiveHeight: true
  });
});


$(document).ready(function(){
  $(".catalog-slider").slick({
  	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,

  });
});

let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let input = document.querySelector("input");
let currentElement = 1;
input.value = currentElement;

plus.addEventListener("click", function(){
	if (currentElement <= 100)
		input.value = ++currentElement;
})

minus.addEventListener("click", function(){
	if (currentElement >= 2)
		input.value = --currentElement;
})