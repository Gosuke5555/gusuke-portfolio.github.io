// ハンバーガーメニュー
$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

$('.nav-item').on('click',function(){
   $('.burger-btn').removeClass('close');
   $('.nav-wrapper').removeClass('slide-in');
   $('body').removeClass('noscroll');
});

// スクロールするとフェードイン
$(function(){
  $(window).on('load scroll', function() {
     var winScroll = $(window).scrollTop();
     var winHeight = $(window).height();
     var scrollPos = winScroll + (winHeight * 0.8);

     $(".show").each(function() {
        if($(this).offset().top < scrollPos) {
           $(this).css({opacity: 1, transform: 'translate(0, 0)'});
        }
     });
  });
});