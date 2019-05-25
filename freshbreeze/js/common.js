	$(document).ready(function() {

		$(".main-header").css("min-height", $(window).height());

	});
function heightDetect() {
		$(".main_header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});