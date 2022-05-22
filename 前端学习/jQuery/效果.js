/* 
    隐藏和显示：
    hide()  和  show()
        第一个参数 速度 slow fast 毫秒数    第二个参数是隐藏/显示完成之后执行的函数
    toggle() 可以在隐藏和显示之间切换 参数和上面相同
*/
$(document).ready(function () {
    $("#no1").click(function () {
        $("#n1 p").hide(1000);
    });

    $("#no2").click(function () {
        $("#n2 p").toggle(1000);
    });

    /* 
        淡入淡出
        fadeIn() 用于淡入已隐藏的元素
        fadeOut() 方法用于淡出可见元素
        fadeToggle()   淡入淡出之间切换
        fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）
            第一个参数 时间  第二个参数 透明度 第三个参数 后续函数
    */
    $("#no3").click(function () {
        $("#div1").fadeIn();
    });
    /* 
        滑动
        slideDown() 方法用于向下滑动元素
        slideUp() 方法用于向上滑动元素
        slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换
    */
    $("#flip").mouseover(function () {
        $("#panel").slideDown("slow");
    });

    /* 
        动画
        $(选择器).animate({css动画},速度,后续函数);
        动画的属性可以是 hide show toggle
        列队功能：
        $("button").click(function(){
            var div=$("div");
            div.animate({});
            div.animate({});
        });
    */
    $("#no4").click(function () {
        $("#animation").animate({
            left: '400px',
            opacity: '0.7',
            width: '150px',
            heigth: '150px'
        })
    })
});

