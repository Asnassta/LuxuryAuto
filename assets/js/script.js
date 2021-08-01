function tab(n)
{
	$('.block-card__tabs a').removeClass('active');
	$('.block-card__tabs a.t'+n).addClass('active');
	$('.block-card__tab').fadeOut(0);
	$('.block-card__tab.tab_'+n).fadeIn(222);


$('.slider-card'+n).slick('refresh');

 

 

}

$(function() {

/*================More content==============*/
	$("#btn-more").on("click", function(event) {
		event.preventDefault();
		$(".block-card__content_more").slideToggle();
		$(this).toggleClass('active');
	});

/*==========Slider================*/
	$('.slider-card1').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		dots: true,
  		prevArrow: $('.slider__arrows1 .slider-card__arrow-prev'),
		nextArrow: $('.slider__arrows1 .slider-card__arrow-next'),
  		responsive: [
    		{
    		  breakpoint: 992,
    		  settings: {
    		    slidesToShow: 2,
    		    slidesToScroll: 2,
    		    infinite: true,
    		    dots: true,
  				prevArrow: $('.slider__arrows1 .slider-card__arrow-prev'),
				nextArrow: $('.slider__arrows1 .slider-card__arrow-next'),
    		  }
    		},
    		{
    		  breakpoint: 546,
    		  settings: {
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    infinite: true,
    		    dots: true,
				prevArrow: $('.slider__arrows1 .slider-card__arrow-prev'),
				nextArrow: $('.slider__arrows1 .slider-card__arrow-next'),
    		  }
    		}
   		]
	});




		


	$('.car-slider').slick({
  		infinite: true,
  		arrows: false,
  		dots: true,
  		slidesToShow: 1,
  		slidesToScroll: 1
	});

	$('.slider-news').slick({
  		infinite: true,
  		dots: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.slider-news__arrow-prev'),
		nextArrow: $('.slider-news__arrow-next')
	});



 
		$('.slider-card2').addClass('iniz');
	$('.slider-card2').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		dots: true,
  		prevArrow: $('.slider__arrows2 .slider-card__arrow-prev'),
		nextArrow: $('.slider__arrows2 .slider-card__arrow-next'),
  		responsive: [
    		{
    		  breakpoint: 992,
    		  settings: {
    		    slidesToShow: 2,
    		    slidesToScroll: 2,
    		    infinite: true,
    		    dots: true,
  				prevArrow: $('.slider__arrows2 .slider-card__arrow-prev'),
				nextArrow: $('.slider__arrows2 .slider-card__arrow-next'),
    		  }
    		},
    		{
    		  breakpoint: 546,
    		  settings: {
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    infinite: true,
    		    dots: true,
				prevArrow: $('.slider__arrows2 .slider-card__arrow-prev'),
				nextArrow: $('.slider__arrows2 .slider-card__arrow-next'),
    		  }
    		}
   		]
	});
	
		$('.slider-card3').addClass('iniz');
	$('.slider-card3').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		dots: true,
  		prevArrow: $('.slider__arrows3 .slider-card__arrow-prev'),
		nextArrow: $('.slider__arrows3 .slider-card__arrow-next'),
  		responsive: [
    		{
    		  breakpoint: 992,
    		  settings: {
    		    slidesToShow: 2,
    		    slidesToScroll: 2,
    		    infinite: true,
    		    dots: true,
  				prevArrow: $('.slider__arrows3 .slider-card__arrow-prev'),
				nextArrow: $('.slider__arrows3 .slider-card__arrow-next'),
    		  }
    		},
    		{
    		  breakpoint: 546,
    		  settings: {
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    infinite: true,
    		    dots: true,
				prevArrow: $('.slider__arrows3 .slider-card__arrow-prev'),
				nextArrow: $('.slider__arrows3 .slider-card__arrow-next'),
    		  }
    		}
   		]
	});

/*========Menu toggle=============*/
	$("#burger").on("click", function() {

		$(this).toggleClass("active");
		$(".mobile-menu").toggleClass("show");
		$(".header").toggleClass("mobile");
		$('body').toggleClass("hidden");
	});

	/*===============Form-popup=================*/
	$(".btn-open").on("click", function(event) {
		event.preventDefault();
		$(".form-popup").fadeIn(333);
 
		$('.form-popup').css('top', $(window).scrollTop()+'px');
		$(".form-popup__inner").fadeIn(333);
		$('body').addClass("hidden");
	});
	$(".form-popup__close,  .closex").on("click", function(event) {
		event.preventDefault();
		$(".form-popup").fadeOut('222');
		$('body').removeClass("hidden");
	});
/*==============/Form-popup=================*/


/*===============Menu=================*/

$( ".drop_auto" ).hover(
  function() {

  	$('.header__link').removeClass('active');
	attr = $(this).attr('attr-menu');

	if($('#'+attr).hasClass('visible') == false)
	{
		$('.menu_drop.visible').fadeOut(111);
		$('.menu_drop.visible').removeClass('visible');

	} 




 	$("#"+attr).fadeIn(222);
 	$('.header').addClass("active");
 	$(this).find('.header__link').addClass("active");
	$('.wrapper-menu').addClass('active');
	$("#"+attr).addClass('visible');



$(this).addClass('active');

  } 
);
 
$( ".wrapper-menu, .nodrop" ).hover(
  function() {
  		$('.menu_drop.visible').fadeOut(111);
		$('.menu_drop.visible').removeClass('visible');
	$('.header').removeClass("active");
 	$('.header__link').removeClass("active");
	$('.wrapper-menu').removeClass('active');
 
});

/*==============/menu=================*/


 

//$('.menu').css('width', $('.header__nav').width()+'px');

})