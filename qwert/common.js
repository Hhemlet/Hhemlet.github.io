let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let image = document.getElementsByTagName("img");
let currentElementSlider = 0;

prev.disabled = true;

next.addEventListener("click", function() {
			currentElementSlider++
		if (currentElementSlider > 0) {
			prev.disabled = false }
			if (currentElementSlider == (image.length - 1)) {
				next.disabled = true 
			} else { next.disabled = false 
				};
	
		for (let i = 0; i < image.length; i++) {
			image[i].classList.add("hidden");
			image[currentElementSlider].classList.remove("hidden");
			console.log(currentElementSlider);

	};

});
	

prev.addEventListener("click", function() {
			currentElementSlider--
	if (currentElementSlider < (image.length - 1)) {
		next.disabled = false }
		if (currentElementSlider == 0 ) {
			prev.disabled = true 
			} else {prev.disabled = false
				};

		for (let i = image.length - 1; i >= 0; i--) {
			image[i].classList.add("hidden");
			image[currentElementSlider].classList.remove("hidden");
			console.log(currentElementSlider);
	};

	
});




let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let input = document.querySelector("input");
let currentElement = 0;
input.value = currentElement;

plus.addEventListener("click", function(){
	if (currentElement <= 9)
		input.value = ++currentElement;
})

minus.addEventListener("click", function(){
	if (currentElement >= 1)
		input.value = --currentElement;
})