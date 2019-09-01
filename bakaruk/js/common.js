function heightDetect() {
		$(".main-header").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

var $parallaxElement = $('.parallax-bg');
var elementHeight = $parallaxElement.outerHeight();

function parallax() {
 
  var scrollPos = $(window).scrollTop();
  var transformValue = scrollPos/40;
  var opacityValue =  1 - ( scrollPos / 2000);
  var blurValue = Math.min(scrollPos / 100, 3);
  
  if ( scrollPos < elementHeight ) {
  
    $parallaxElement.css({
      'transform': 'translate3d(0, -' + transformValue + '%, 0)',
      'opacity': opacityValue,
      '-webkit-filter' : 'blur('+blurValue+'px)'
    });
    
  }
  
}


$(window).scroll(function() {
  parallax();
});

jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()>10)
     {
      jQuery('.social-top').fadeOut();  
     }
    else
     {
      jQuery('.social-top').fadeIn();
     }
 });

(function ($) {
  $(window).on("load", function () {
    var masonryGrid = $(".grid");
    masonryGrid.imagesLoaded(function () {
      masonryGrid.masonry({
        itemSelector: ".grid-item",
        percentPosition: true
      });
    });
  });
})(jQuery);

var $grid = $('.grid').masonry({
  // disable initial layout
  initLayout: false,
  //...
});
// bind event
$grid.masonry( 'on', 'layoutComplete', function() {
  console.log('layout is complete');
});
// trigger initial layout
$grid.masonry();

