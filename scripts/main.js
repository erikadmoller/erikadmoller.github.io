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

// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('.ion-arrow-down-b'),
			circles = el.querySelector('.orange-parent');

			// menu.classList.add('hide');
			// circles.classList.add('transparent');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			circles.classList.add('opaque');
			circles.classList.remove('transparent');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			circles.classList.remove('opaque');
			circles.classList.add('transparent');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};