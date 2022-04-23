
//TOP
$(function () {
  $(".top a").click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
      scrollTop:0},1000);
  });



  $(".menuMain").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find(".menuMain").removeClass('active');

    $(this).parent().siblings().find("ul").slideUp();
    $(this).parent().find("ul").slideToggle();
});
});

