(function ($) {

    "use strict";

    //轮播图圆点
    $('.banner .dots>span').mouseover(function () {
        $(this).addClass('active').siblings().removeClass('active')
        const index = $(this).index()
        $('.banner .imgs>img').eq(0).stop().animate({ marginLeft: `-${index}00%` })
    })
    //轮播图按钮
    $('.banner .btns>img').eq(0).click(function () {
        const $prev = $('.banner .active').prev()
        if ($prev.length) {
            $prev.mouseover()
        } else {
            $('.banner .dots>span').eq(-1).mouseover()
        }
    })

    $('.banner .btns>img').eq(1).click(function () {
        const $next = $('.banner .active').next()
        if ($next.length) {
            $next.mouseover()
        } else {
            $('.banner .dots>span').eq(0).mouseover()
        }
    })

    //定时器
    setInterval(() => {
        $('.banner .btns>img').eq(1).click()
    }, 2000);

    //选中图片显示细节
    $('.goods .item .pic').on('click', function () {
        const d = $(this).next().next()
        d.show()
    })

    //点击取消选择detail
    $('.goods .detail').on('click', function () {
        $(this).hide();

    })

    //选中加入购物车跳转
    $('.goods .add-to-cart').click(function () {
        window.location.href = '#'
    })

    //选中爱心收藏
    $('.goods .desc .bi-heart').click(function () {
        $(this).toggleClass('active');
    })




})(window.jQuery);
