(function ($) {

    "use strict";

    // 填充文字
    const d = document.querySelector('.page-wrapper');
    for (let i = 0; i < 100; i++) {
        $(`<div>${i}+hhhhhhhhhhhhhhhhhh</div>`).appendTo(d)
    }

    // header fix后脱离文档流，需要重新占据高度占据高度
    $('.main-header').next().css({
        'margin-top': `${$('.main-header').height()}px`,
    })


    //menu-collections悬浮效果
    $('.menu-collections>span').eq(0).mouseover(function () {
        $(this).toggleClass('bi-heart')
        $(this).toggleClass('bi-heart-fill')
        $(this)
    })



})(window.jQuery);
