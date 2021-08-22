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

// Contctへのスムーススクロール
$('a[href^="#contact"]').click(function() {
   // スクロールの速度
   let speed = 400; // ミリ秒で記述
   let href = $(this).attr("href");
   let target = $(href == "#" || href == "" ? 'html' : href);
   let position = target.offset().top;
   $('body,html').animate({
     scrollTop: position
   }, speed, 'swing');
   return false;
 });

// 送信後の動き
$('#form').submit(function (event) {
   var formData = $('#form').serialize();
   $.ajax({
     url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScyAAQwohpzMNaCm8La_H9w9gBsThsjoKqwXfmGdeFrXbk-LA/formResponse",
     data: formData,
     type: "POST",
     dataType: "xml",
     statusCode: {
       0: function () {
          $(".submit-btn").fadeOut(100);
          $(".end-message").fadeIn(1500);
         // window.location.href = "thanks.html";
       },
       200: function () {
         $(".false-message").slideDown();
       }
     }
   });
   event.preventDefault();
 });
 
 // プライバシーポリシーにチェックがないと送信できない
const $submitBtn = $('#js-submit')
$('#form input,#form textarea').on('change', function () {
  if (
    $('#form input[type="text"]').val() !== "" &&
    $('#form input[type="email"]').val() !== "" &&
    $('#form input[type="checkbox"]').val() !== "" &&
    $('#form #privacyCheck').prop('checked') === true
  ) {
    $submitBtn.prop('disabled', false);

  } else {
    $submitBtn.prop('disabled', true);
  }
});
