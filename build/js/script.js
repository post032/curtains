$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.company__photos:not(.slick-initialized)').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
  } else {
    $('.company__photos.slick-initialized').slick('unslick');
  }
});

$(".review__write").click(function(){
	$('.review__write2').slideToggle(300);
	return false;
});
$(".review__filters").click(function(){
	$('.review__filter').slideToggle(300);
	return false;
});

$(document).on({
    click : function() {
      $('.fav__choise').slideToggle(100);
        $('#sort').val($(this).val());
    }
}, ".fav__input");

$('.review__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});

$('.review__lists__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.article__lists').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 dots: false,
 fade: true,
 asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: false,
 focusOnSelect: true
});

$('.fav__button').click(function(){
	$('.fav__choise').slideToggle(300);
	return false;
});
