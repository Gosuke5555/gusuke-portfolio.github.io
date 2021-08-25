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

// ファストビューの画像スライド
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed:1000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
      pauseOnFocus: false,//フォーカスで一時停止を無効
      pauseOnHover: false,//マウスホバーで一時停止を無効
      pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
  $('.slider').slick('slickPlay');
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


// Contactへのスムーススクロール
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
