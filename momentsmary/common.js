const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let current = document.querySelector(".current");
let total = document.querySelector(".total");
let image = document.getElementsByTagName("img");
let currentElementSlider = 0;

current.innerHTML = 1;

prev.disabled = true;

next.addEventListener("click", function() {
			currentElementSlider++
		if (currentElementSlider > 0) {
			prev.disabled = false }
			if (currentElementSlider === (image.length - 1)) {
				next.disabled = true 
			} else { next.disabled = false 
				};
	
		for (let i = 0; i < image.length; i++) {
			image[i].classList.add("hidden");
			image[currentElementSlider].classList.remove("hidden");
	};
		current.innerHTML = currentElementSlider + 1;

});
	

prev.addEventListener("click", function() {
			currentElementSlider--
	if (currentElementSlider < (image.length - 1)) {
		next.disabled = false }
		if (currentElementSlider === 0 ) {
			prev.disabled = true 
			} else {prev.disabled = false
				};

		for (let i = image.length - 1; i >= 0; i--) {
			image[i].classList.add("hidden");
			image[currentElementSlider].classList.remove("hidden");
	};
		current.innerHTML = currentElementSlider + 1;

	
});

total.innerHTML = image.length