$(document).ready(function() {
	var $intro = $('.intro');

	/* graceful slideup of component on load */
	$('.intro iframe').attr('src', 'https://giphy.com/embed/ypqHf6pQ5kQEg').load(function() {
		$intro.addClass('slide-up-fade-in');
	});
	/* graceful slideup of component on load */
	$('.portfolio .grid-container').load(function() {
		$('.grid-container').addClass('slide-up-fade-in');
	});
	
	$(".menu-dropdown").click(function() {
		$('.menu-submenu').slideToggle(300);
	});

	$(window).on('resize', function() {
		var $win = $(window).width();

		if($win > 960) {
			$('.menu-submenu').css('display', '');
		}
	});

	//Mouseup textarea false
	$(".menu-submenu").mouseup(function() {
		return false
	});

	/* arrow keys for portfolio */
	function goToProject(position) {
		var projectLink = $('a[rel="' + position + '"]').attr('href');

		if(projectLink) {
			window.location.href = projectLink;
		}
	}
	$(document).keydown(function(e) {
		e.preventDefault();
		switch(e.which) {
			case 37:
			//Left key pressed
			goToProject('prev');
			break;

			case 39:
			//Right key pressed 
			goToProject('next');
			break;

			default:
				return;
		}
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
			pink = el.querySelector('.pink-parent'),
			purple = el.querySelector('.purple-parent'),
			yellow = el.querySelector('.yellow-parent'),
			red = el.querySelector('.red-parent');


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
		else if(yellow) {
			if(!yellow.hasClass('opaque')) {
				yellow.classList.add('opaque');
				yellow.classList.remove('transparent');
			}
			else {
				yellow.classList.remove('opaque');
				yellow.classList.add('transparent');			
			}
		}
		else if(red) {
			if(!red.hasClass('opaque')) {
				red.classList.add('opaque');
				red.classList.remove('transparent');
			}
			else {
				red.classList.remove('opaque');
				red.classList.add('transparent');			
			}
		}


	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};