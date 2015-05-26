$(document).ready(function() {
	
  $(".menu-dropdown").click(function() {
    $('.menu-submenu').slideToggle(300);
});

	//Mouseup textarea false
	$(".menu-submenu").mouseup(function() {
		return false
	});
	$(".menu-dropdown").mouseup(function() {
		return false
	});

});