

// $(".header__hamburger").click(function () {
//     $(this).toggleClass('active');
// });

// const ham = document.querySelector('#ham');
// const nav = document.querySelector('#nav');

// ham.addEventListener('click', function () {
//   // console.log('ok!');

//   ham.classList.toggle('active');
//   nav.classList.toggle('active');
// })

$("#ham").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#gnav").toggleClass('active');//ナビゲーションにpanelactiveクラスを付与
    $(".header__circle-bg").toggleClass('active');//丸背景にcircleactiveクラスを付与
});

$("#gnav").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#ham").removeClass('active');//ボタンの activeクラスを除去し
    $("#gnav").removeClass('active');//ナビゲーションのpanelactiveクラスを除去
    $(".header__circle-bg").removeClass('active');//丸背景のcircleactiveクラスを除去
});

// // 動きのきっかけの起点となるアニメーションの名前を定義
// function fadeAnime(){

//   // ふわっ
//   $('.reason__area__itemLeft').each(function(){ //reason__area__itemLeftというクラス名が
//     var elemPos = $(this).offset().top-50;//要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//     $(this).addClass('fadeUpSlideLeft');// 画面内に入ったらfadeUpというクラス名を追記
//     }
//   });

//   $('.reason__area__itemRight').each(function(){ //reason__area__itemRightというクラス名が
//     var elemPos = $(this).offset().top-50;//要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//     $(this).addClass('fadeUpSlideRight');// 画面内に入ったらfadeUpというクラス名を追記
//     }
//   });
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function (){
// fadeAnime();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面をスクロールをしたら動かしたい場合の記述
