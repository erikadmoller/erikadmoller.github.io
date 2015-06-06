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
			orange = el.querySelector('.orange-parent'),
			pink = el.querySelector('prink-parent'),
			purple = el.querySelector('purple-parent');


	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}

// Does the clicked element have a query selector?

		if(orange) {
			if(!orange.hasClass('opaque')) {
				orange.classList.add('opaque');
				orange.classList.remove('transparent');
			}
			else {
				orange.classList.remove('opaque');
				orange.classList.add('transparent');			
			}
		}
		else if(pink) {
			if(!pink.hasClass('opaque')) {
				pink.classList.add('opaque');
				pink.classList.remove('transparent');
			}
			else {
				pink.classList.remove('opaque');
				pink.classList.add('transparent');			
			}
		}
		else if(purple) {
			if(!purple.hasClass('opaque')) {
				purple.classList.add('opaque');
				purple.classList.remove('transparent');
			}
			else {
				purple.classList.remove('opaque');
				purple.classList.add('transparent');			
			}
		}


	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};