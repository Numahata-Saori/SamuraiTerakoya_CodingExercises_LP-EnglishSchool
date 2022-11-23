

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
