$('.btn-menu').click(function () {
    $('.menu').toggleClass('active');
    $(this).toggleClass('active');
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
    });
  });