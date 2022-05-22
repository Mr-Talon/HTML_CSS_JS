//进场动画函数
$(window).scroll(function () {
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // 用变量scrollT保存当前滚轮距离页面顶部的距离
    // console.log(scrollT)
    var backTop = $("#tec").offset().top - $(window).height() / 2;
    // 技术中心距离页面顶端的距离-页面的高度/2  效果就是这一个块到达页面的一半时运行下面函数
    // console.log(backTop);
    if (scrollT > backTop) {
        // 给样式添加效果 并且清除原来的隐藏效果
        $(".a1").addClass("animate__fadeInRightBig show").removeClass("fade");
        $(".a2").addClass("animate__fadeInUpBig show").removeClass("fade");
        $(".a3").addClass("animate__fadeInDownBig show").removeClass("fade");
        $(".a4").addClass("animate__fadeInLeftBig show").removeClass("fade");
    }
});


//返回顶部函数
//页面加载完毕之后
window.onload = function () {
    //找到页面的按钮给它设置相关程序
    var toTop = document.getElementById("btn");

    var timer = null;
    //声明一个全局变量保存定时器
    toTop.onclick = function () {
        //定时器每30ms 执行一次内部的函数
        timer = setInterval(function () {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            //设置越滚越慢的效果
            var speed = scrollT / 5;
            document.documentElement.scrollTop = scrollT - speed;
            //到顶之后结束定时器 防止不可以下滑
            if (scrollT == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}

//返回顶部按钮在翻过一个屏幕之后出现
$(window).scroll(function () {
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollT > 300) {
        $("#backToTop").addClass("show").removeClass("fade");
    }
})

//导航栏 吸顶灯效果
$(window).scroll(function () {
    var nav = document.getElementById("nav");
    var navTop = $("#nav").offset().top;
    // console.log(nav);
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollT >= navTop) {
        // sticky属性可以完成吸顶灯效果
        nav.style.position = "sticky";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.zIndex = "100";
    }
})