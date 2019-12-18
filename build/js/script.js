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

// $(window).on('load resize', function() {
//   if ($(window).width() < 768) {
//     $('.review__filters').click() {
//       $('.review__filter').toggleClass('review__toggle');
//     };
//   } else {
//     $('.review__filter').removeClass('review__toggle');
//   }
// });

// $('.review__filters').click() {
//   $('.review__filter').toggleClass('review__toggle');
// };

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

$(".review__write").click(function(){
	$('.review__write2').slideToggle(300);
	return false;
});
