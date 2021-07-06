$(document).ready(() => {
    $('.dropdown-trigger').dropdown();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });



    $("#btn-about").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutme").offset().top
        }, 500);
    });
    $("#btn-work").click(function () {
        $('html, body').animate({
            scrollTop: $("#mywork").offset().top
        }, 500);
    });
    $("#btn-contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contactme").offset().top
        }, 500);
    });
})
