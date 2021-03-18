$(document).ready(function () {

    const nav = $("#navigationBar");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation);
    function stickyNavigation() {
        var body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.sticky').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.sticky').removeClass('open');
    });


    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href').offset().top - 100)
        }, 2000);

    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);

    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });



});