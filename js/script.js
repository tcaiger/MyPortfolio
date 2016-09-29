$(document).ready(function() {

	// ================================
	// Resize the header to the window size
	// ================================
	function setHeight() {
    	windowHeight = $(window).innerHeight();
    	$('header').css('height', windowHeight);
  	};
  	setHeight();
  
	$(window).resize(function() {
    	setHeight();
	});

});



