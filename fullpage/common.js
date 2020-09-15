new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: false
});

//methods
fullpage_api.setAllowScrolling(true);


$(document).ready(function() {

		$(".main-header").css("min-height", $(window).height());
		$(".top-nav ul a").mPageScroll2id();

	});