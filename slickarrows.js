$('.single-carousel').slick({
		infinite: false,
		lazyLoad: 'ondemand',
		// autoplay: true,
		arrows:true,
		prevArrow:"<button class=' slick-prev hidden'><i class='material-icons'>chevron_left</i></button>",
		nextArrow:"<button class=' slick-next '><i class='material-icons'>chevron_right</i></button>",
	});
var listItem= $('.item');
var singleN= $( ".single-carousel div" ).index( listItem ) ;
$('.single-carousel').on('afterChange', function (event, slick, currentSlide) {
		if(currentSlide === singleN) {
			$(this).find('.slick-next').addClass('hidden');
		}
		else {
			$(this).find('.slick-next').removeClass('hidden');
		}

		if(currentSlide === 0) {
			$(this).find('.slick-prev').addClass('hidden');
		}
		else {
			$(this).find('.slick-prev').removeClass('hidden');
		}  
	});
