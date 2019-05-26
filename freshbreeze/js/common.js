	$(document).ready(function() {

		$(".main-header").css("min-height", $(window).height());
		$(".top-nav ul a").mPageScroll2id();

	});
function heightDetect() {
		$(".main-header").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$("input, select, textarea").jqBootstrapValidation();