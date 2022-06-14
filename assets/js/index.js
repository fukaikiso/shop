(function ($) {

    "use strict";

    // 填充文字
    const d = document.querySelector('.page-wrapper');
    for (let i = 0; i < 100; i++) {
        $(`<div>hhhhhhhhhhhhhhhhhh</div>`).appendTo(d)
    }

    // header fix后脱离文档流，需要重新占据高度占据高度
    $('.header-placeholder').css({
        'height': `${$('.main-header').height()}`,
    })
    // 检测屏幕宽度，若小于md，则改变排版


})(window.jQuery);
