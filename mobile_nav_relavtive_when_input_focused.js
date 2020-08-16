if($(window).width()<769){
		$('.dz-default.dz-message').html('Click here to Browse a Picture');
		$('input:not([type="checkbox"]):not([type="radio"])').focusin(  
			function(){  
				$('.mob-nav').addClass('relative');  
			}).focusout(  
			function(){  
				$('.mob-nav').removeClass('relative');  
			});

		}
