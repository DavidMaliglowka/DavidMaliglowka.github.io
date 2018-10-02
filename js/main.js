jQuery(document).ready(function($) {

	'use strict';

	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

				$( "#burger" ).on("click", function() {
					if ($(this).is(":checked")) {
						$("nav").removeClass('display-none');
						$(".CTA-button").removeClass('display-none');
					} else  {
						$("nav").addClass('display-none');
						$(".CTA-button").addClass('display-none');
					}


				})

});
