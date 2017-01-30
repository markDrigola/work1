'use strict'
;(function () {
    $(document).on('ready', function () {
        $('.specialists-slider-init').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: true
        });
        $('.reviews-slider-init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true
        });
        $('.sertificate-slider-init').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: true
        });
    });
})();