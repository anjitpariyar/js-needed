$('.nav.nav-pills li').click(function(){
				$('html, body').animate({
					scrollTop: ($(".tab-content").offset().top)-100
				}, 1000);
			})
