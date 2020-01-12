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

function readURL(input) {
    if ('#one' && '#one'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#one-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$("#one").change(function () {
    readURL(this);
});

function readURLTwo(input) {
    if ('#two' && '#two'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#two-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#two").change(function () {
    readURLTwo(this);
});

function readURLThree(input) {
    if ('#three' && '#three'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#three-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#three").change(function () {
    readURLThree(this);
});

function readURLFour(input) {
    if ('#four' && '#four'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#four-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#four").change(function () {
    readURLFour(this);
});

function readURLFive(input) {
    if ('#five' && '#five'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#five-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$("#five").change(function () {
    readURLFive(this);
});

function readURLSix(input) {
    if ('#six' && '#six'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#six-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#six").change(function () {
    readURLSix(this);
});

function readURLSeven(input) {
    if ('#seven' && '#seven'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#seven-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#seven").change(function () {
    readURLSeven(this);
});

function readURLEight(input) {
    if ('#eight' && '#eight'[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#eight-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#eight").change(function () {
    readURLEight(this);
});
