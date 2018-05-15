// sliders.js
jQuery(function ($) {

    // preset options
    var heroSlider = $('.js-slider');
    var heroOption = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 5000,
        adaptiveHeight: false,
        speed: 500,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<div class="arrow-block arrow-block--right"><i class="fa fa-arrow-right"></i></div>',
        prevArrow: '<div class="arrow-block arrow-block--left"><i class="fa fa-arrow-left"></i></div>',
        accessibility: false // prevent page scroll up on autoplay
    };

    if ($('.js-hero-slider').children.length) {
        // init slider
        heroSlider.slick(heroOption);
    }

}); // ready
// sliders.js end