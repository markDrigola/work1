'use strict'
;(function () {
    $(document).on('ready', function () {
        //Sale block
        var blockHeaderHEight = $('.header-top-bg').outerHeight(),
            blockSale = $('.flag-sale');

        $(window).scroll(function () {
            if($(window).scrollTop() > blockHeaderHEight) {
                blockSale.addClass('show-sale');
                return false;
            } else {
                blockSale.removeClass('show-sale');
                return false;
            }
        });

        $('.specialists-slider-init').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
            ]
        });
        $('.reviews-slider-init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            arrows: true
        });
        $('.sertificate-slider-init').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
            ]
        });
        var indexSlideClick = 0;
        $('.sertificate-slider__item').on('click', function () {
            indexSlideClick = $(this).parent('.slick-slide').index();
        });
        $('.slider-modal-init').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: $('.arr-sl-mod-prev'),
            nextArrow: $('.arr-sl-mod-next'),
            adaptiveHeight: true,
            arrows: true
        });


        $("#myModal-1").on('shown.bs.modal', function () {
            $('.slider-modal-init').find('.slick-dots').children().eq(indexSlideClick).trigger('click');
            $('.slider-modal-init ').resize();
            console.log(indexSlideClick)

        });
        $('.mod-serv-list__item').on('click', function () {
            $("#myModal-2").modal('hide');
            setTimeout(function () {
                $("#myModal-3").modal('show');
            }, 500);
        });
        $('.mod-serv-bl-inp-item-sub__el-js').on('click', function () {
            $("#myModal-3").modal('hide');
            setTimeout(function () {
                $("#myModal-4").modal('show');
                //Условие Валидации если оно прошло всплывает окно подтверждения
                //if(...) {
                    setTimeout(function () {
                        $("#myModal-4").modal('hide');
                    }, 2200);
                }, 500);
                //}

        });
        // $('.sertificate-slider__item').on('click', function () {
        //     var sliderInitIntervals = setInterval(function () {
        //         if($('.modal').css('display') === 'block') {
        //             clearInterval(sliderInitIntervals);
        //             $('.slider-modal-init ').resize()
        //         };
        //     }, 10);
        // });


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

        //gamburger
        var bgOverlay = $('.bg-menu-overlay'),
            flagMenu = 0,
            navList = $('.header-nav__list');
        $('.gamburger-block').on('click', function (event) {
            event.stopPropagation();
            if(flagMenu === 0) {
                flagMenu = 1;
                openMenuList()
            } else if(flagMenu === 1) {
                flagMenu = 0;
                closedMenuList();
            }
        });

        bgOverlay.on('click', function (event) {
            event.stopPropagation();
            if(flagMenu === 1) {
                flagMenu = 0;
                closedMenuList();
            }
        });

        $('.header-top__button-block').on('click', function () {
            if(flagMenu === 1) {
                flagMenu = 0;
                closedMenuList();
            }
        });
        function openMenuList() {
            bgOverlay.addClass('menu-open');
            navList.slideDown();
            $('.head-init-script').addClass('open-list-menu');
            $('.header-top').addClass('open-menu-bg');
            $('body').css({
                'overflow':'hidden'
            });
        }
        function closedMenuList() {
            bgOverlay.removeClass('menu-open');
            navList.slideUp();
            $('.head-init-script').removeClass('open-list-menu');
            $('.header-top').removeClass('open-menu-bg');
            $('body').css({
                'overflow':'auto'
            });
        }

        //Select
        $('.select-drop-list').mCustomScrollbar();

        var dropMenuSel = $('.select-drop-list'),
            flagSelectTogle = 0;
        $('.select-drop-list-top-block').on('click', function (event) {
            event.stopPropagation();
            if(flagSelectTogle === 0) {
                flagSelectTogle = 1;
                dropMenuSel.slideDown();
                $('.item-select-text__img').addClass('open-select-menu');
            } else if(flagSelectTogle === 1) {
                flagSelectTogle = 0;
                dropMenuSel.slideUp();
                $('.item-select-text__img').removeClass('open-select-menu');
            }
        });
        $('.select-drop-list__item').on('click', function (event) {
            event.stopPropagation();
            $('.select-drop-list-top-block').children()[0].textContent = $(this).children()[0].textContent;
            $('.select-drop-list-top-block').children()[1].textContent = $(this).children()[1].textContent;
            dropMenuSel.slideUp();
            flagSelectTogle = 0;
            $('.item-select-text__img').removeClass('open-select-menu');
        });
        $('body,html').on('click', function () {
            dropMenuSel.slideUp();
            flagSelectTogle = 0;
            $('.item-select-text__img').removeClass('open-select-menu');
        });

        //Reviews block
        var flagText = 0;
        var formSlide = $('.form-reviews-slide');
        $('.feed-back-reviews__link').on('click', function (event) {
            if($(this).closest('.coments-item').find(formSlide).css('display') === 'none') {
                flagText = 0;
            } else if($(this).closest('.coments-item').find(formSlide).css('display') === 'block') {
                flagText = 1;
            }
            event.preventDefault();
            if(flagText === 0) {
                flagText = 1;
                $(this).closest('.coments-item').find(formSlide).slideDown();
                $(this).text('ОТМЕНА');
            } else if(flagText === 1) {
                flagText = 0;
                $(this).closest('.coments-item').find(formSlide).slideUp();
                $(this).text('ОТВЕТИТЬ');
            }
        });

        //Подгрузка картинки в модалку из ответов
        var rewImg = $('.reviews-slide-right__img');

        rewImg.on('click', function () {
            var thisSrcImg = $(this).children('img').attr('src');

            $('#myModal-5').modal('show');
            $('#myModal-5').find('.sl-mod-img').children('img').attr('src', thisSrcImg);
        })
    });
})();