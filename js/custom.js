$(document).ready(function(){

// Stiky Header
 $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('.header').addClass("stiky");
        } else {
        $('.header').removeClass("stiky");
        }
    });

 
$('.menuBtn').click(function(){
    $('.menu').addClass('activeMenu');
});
$('.closeMenu').click(function(){
    $('.menu').removeClass('activeMenu');
});



});

