	jQuery(function(){
      jQuery('.latest-slide').slick({
        slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<a class="slick-prev"><img src="/wp-content/themes/blaineluetkemeyer/images/arrow-prev.png"></a>',
		nextArrow: '<a class="slick-next"><img src="/wp-content/themes/blaineluetkemeyer/images/arrow-next.png"></a>',
		responsive: [
	    {
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    }
	  	]
      });
    });