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

        //Scroll head menu
        var blockHeadMenu = $('.head-init-script');
        var tempScrollTop, currentScrollTop = 0;
        $(window).on('scroll', function () {
            var thisScrollTop = $(this).scrollTop();

            currentScrollTop = $(document).scrollTop();
            if($(this).scrollTop() > blockHeadMenu.offset().top) {
                blockHeadMenu.addClass('menu-fixed');
                $('.menu-fixed').css('top','-62px');
                blockHeadMenu.parent().css({
                    'paddingTop': blockHeadMenu.height() + 'px',
                })
            }
            if(tempScrollTop < currentScrollTop) {
                $('.menu-fixed').css('top','-62px');
            } else if (tempScrollTop > currentScrollTop ) {
                $('.menu-fixed').css('top','0');
            }

            if($(this).scrollTop() === 0) {
                blockHeadMenu.removeClass('menu-fixed');
                blockHeadMenu.parent().css({
                    'paddingTop': 0,
                })
            }

            tempScrollTop = currentScrollTop;
        });
    });
})();