$(document).ready(function() {

	$(".main-header").css("min-height", $(window).height());

});
 
 window.addEventListener('resize', function(event){
 	$(".main-header").css("min-height", $(window).height());
});