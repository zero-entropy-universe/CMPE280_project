/*jslint browser: true*/
/*global $, jQuery*/
$(function() {
    "use strict";
    $('.menu-area .nav li .dropdown-menu li').attr('data-aos', 'fade-right');

    $('.menu-area .nav a.dropdown-toggle').on('click', function() {
        var $this = $(this),
            $parent = $this.parent(),
            $timer;
        if (!$parent.hasClass('open')) {
            $timer = 100;
            $parent.find('.dropdown-menu:first > li').removeClass('aos-animate').each(function() {
                var $li = $(this);
                setTimeout(function() {
                    $li.addClass('aos-animate');
                }, $timer);
                $timer += 100;
            });
        }
    });

    $.fn.toggleAttr = function(attr) {
        return this.each(function() {
            var $this = $(this);
            $this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, attr);
        });
    };

	/* ---------------------------------------------------------------------- */
	/*	Preloading Fit Window Width
	/* ---------------------------------------------------------------------- */

	$(function(){
		// Preloading Fit Window Width
		$('#loader-wrapper').css('width',window.innerWidth);
		$('.sk-circle').css('visibility', 'visible');
	});

    $(document).ready(function() {

        /* ---------------------------------------------------------------------- */
        /*	Quick Booking
        /* ---------------------------------------------------------------------- */


        $(".quick-book-open, .overlay-close, .final-message").on('click', function(e) {
            $('.quick-booking .overlay').toggleClass("open");
            return false;
        });

        /* ---------------------------------------------------------------------- */
        /*	Side Nav
        /* ---------------------------------------------------------------------- */


        $(".open-mobile-menu, .side-nav-overlay").on('click', function(e) {
            $('.side-nav-overlay, .side-nav, .open-mobile-menu').toggleClass("active");
            return false;
        });

        $(".side-nav-dropdown").on('click', function(e) {
            $(this).toggleClass("active");
            return false;
        });

        /* ---------------------------------------------------------------------- */
        /*	Navbar with many childs
        /* ---------------------------------------------------------------------- */

        // Navbar
        $('.navbar-nav a.dropdown-toggle').on('click', function(e) {
            var $el = $(this);
            var $parent = $el.offsetParent(".dropdown-menu");
            $(this).parent("li").toggleClass('open');

            if (!$parent.parent().hasClass('nav')) {
                $el.next().css({
                    "top": $el[0].offsetTop,
                    "left": $parent.outerWidth() - 4
                });
            }

            $('.nav li.open').not($(this).parents("li")).removeClass("open");

            return false;
        });

        /* ---------------------------------------------------------------------- */
        /*	Slider owlCarousel
	    /* ---------------------------------------------------------------------- */
        // Main Slider
        $('#owl-slider').owlCarousel({
            items: 1,
            loop: true,
            center: false,
            dots: true,
            nav: false,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 0,
        });

        // Slider Caption Animation
        $('#owl-slider').on('changed.owl.carousel', function(event) {
            $('.owl-item:not(.active) .aos-init').removeClass('aos-animate');
            setTimeout(function() {
                $('.slider .aos-init').addClass('aos-animate');
            }, 500);
        });

        $('.full-window-height .owl-slider-block').css('height', window.innerHeight);
        // $('.grid-item.grid-item--height2').css('height', ($('.grid-item').height() * 2) + 5);
        /* ---------------------------------------------------------------------- */
        /*	Our activities owlCarousel
        /* ---------------------------------------------------------------------- */

        // Our activities
        $('#our-activities-owl').owlCarousel({
            items: 3,
            loop: true,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                },
            },
            dots: true,
            nav: false,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 5000,
        });

        // Go to the next item
        $('#owl-activities-prev').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            $('#our-activities-owl').trigger('prev.owl.carousel');
        });

        // Go to the previous item
        $('#owl-activities-next').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            // Parameters has to be in square bracket '[]'
            $('#our-activities-owl').trigger('next.owl.carousel', [300]);
        });

        /* ---------------------------------------------------------------------- */
        /*	Date Picker
        /* ---------------------------------------------------------------------- */
        $('.date').datepicker({});

        /* ---------------------------------------------------------------------- */
        /*	available-room owlCarousel
        /* ---------------------------------------------------------------------- */

        // available-room
        $('#available-room-owl').owlCarousel({
            items: 4,
            loop: true,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1000: {
                    items: 4
                },
            },
            dots: true,
            nav: false,
            margin: 1,
            autoplay: false,
            autoplayTimeout: 5000,
        });

        // Go to the next item
        $('#owl-available-room-prev').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            $('#available-room-owl').trigger('prev.owl.carousel');
        });

        // Go to the previous item
        $('#owl-available-room-next').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            // Parameters has to be in square bracket '[]'
            $('#available-room-owl').trigger('next.owl.carousel', [300]);
        });

        /* ---------------------------------------------------------------------- */
        /*	Isotope
        /* ---------------------------------------------------------------------- */

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            //  percentPosition: true,
            //  fitWidth: true,
            // masonry: {}
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            //removes class from all items to "clear" the class from your menu
            $('.filter-button-group button').removeClass("active");
            //adds the class to whichever item you clicked
            $(this).addClass("active");

        });
        $('.grid-item.grid-item--height2').css('height', ($('.grid-item').height() * 2) + 5);
        $('.dh-container').directionalHover();

        // Popup Gallery
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        // Popup Youtube
        $('.popup-youtube').magnificPopup({
            type: 'iframe'
        });

        /* ---------------------------------------------------------------------- */
        /*	counterUp
        /* ---------------------------------------------------------------------- */

        //Numaric Counter
        $('.counter-num').counterUp({
            delay: 10,
            time: 1000
        });
        /* ---------------------------------------------------------------------- */
        /*	Our activities owlCarousel
        /* ---------------------------------------------------------------------- */

        // Our activities
        $('#latest-offers-owl').owlCarousel({
            items: 2,
            loop: true,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 2
                },
            },
            dots: true,
            nav: false,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 5000,
        });

        // Go to the next item
        $('#latest-offers-prev').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            $('#latest-offers-owl').trigger('prev.owl.carousel');
        });

        // Go to the previous item
        $('#latest-offers-next').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            // Parameters has to be in square bracket '[]'
            $('#latest-offers-owl').trigger('next.owl.carousel', [300]);
        });
        /* ---------------------------------------------------------------------- */
        /*	our-events owlCarousel
        /* ---------------------------------------------------------------------- */

        // our-events-owl
        $('#our-events-owl').owlCarousel({
            items: 3,
            loop: true,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1000: {
                    items: 3
                },
            },
            dots: true,
            nav: false,
            margin: 1,
            autoplay: false,
            autoplayTimeout: 5000,
        });

        // Go to the next item
        $('#owl-our-events-prev').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            $('#our-events-owl').trigger('prev.owl.carousel');
        });

        // Go to the previous item
        $('#owl-our-events-next').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            // Parameters has to be in square bracket '[]'
            $('#our-events-owl').trigger('next.owl.carousel', [300]);
        });
        /* ---------------------------------------------------------------------- */
        /*	our-events owlCarousel
        /* ---------------------------------------------------------------------- */

        // our-events-owl
        $('#our-testimonials-owl').owlCarousel({
            items: 3,
            loop: true,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1000: {
                    items: 3
                },
            },
            dots: true,
            nav: false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 5000,
        });

        // Go to the next item
        $('#our-testimonials-prev').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            $('#our-testimonials-owl').trigger('prev.owl.carousel');
        });

        // Go to the previous item
        $('#our-testimonials-next').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();
            // Parameters has to be in square bracket '[]'
            $('#our-testimonials-owl').trigger('next.owl.carousel', [300]);
        });

    });

    /* ---------------------------------------------------------------------- */
    /*	16:9 Aspect Ratio
    /* ---------------------------------------------------------------------- */
    function initDesign() {
        //Add attr
        $('.responsive-ratio').attr('data-heqw', '1.77777777777778');

        // Start Aspect ratio
        $("[data-heqw]").each(function() {
            var xclass = $(this).attr('data-heqw');
            var finalv = Number($(this).innerWidth()) / Number(xclass);
            if (finalv !== 0) {
                $(this).css('height', finalv);
            } else {
                setTimeout(function() {
                    initDesign();
                }, 5000);
            }
        });
        // End Aspect ratio
    }

    /* ---------------------------------------------------------------------- */
    /*	OnLoad & Resize Function
    /* ---------------------------------------------------------------------- */
    $(window).on('load', function() {
        initDesign();
        setTimeout(function() {
            $('.all-filter-button').click();
        }, 1000);
    });
    $(window).on('resize', function() {
        initDesign();
        $('.grid-item.grid-item--height2').css('height', ($('.grid-item').height() * 2) + 5);
    });

    /* ---------------------------------------------------------------------- */
    /*	Fixed Header
    /* ---------------------------------------------------------------------- */

    //Add class on Body
    $(window).on("scroll", function() {
        var fromTop = $("body").scrollTop();
        $('body:not(.header-light)').toggleClass("fixed-header", (fromTop > 30));
        $('body.header-light').toggleClass("fixed-header-animate", (fromTop > 118));
        $('body.header-light').toggleClass("fixed-header2", (fromTop > 200));

    });

    /* ---------------------------------------------------------------------- */
    /*	Smooth Scrolling
    /* ---------------------------------------------------------------------- */
    $('a[href*="#"]:not([href="#"])').on('click', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

	/* ---------------------------------------------------------------------- */
	/*	Preloading Effect
	/* ---------------------------------------------------------------------- */

	$(window).load(function(){
		//Preloading
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 100);
	});

});
