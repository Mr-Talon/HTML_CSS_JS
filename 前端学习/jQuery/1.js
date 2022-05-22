/*
    jQuery 是一个 JavaScript 库

    jQuery库安装
    Google的CDN
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    Microsoft的CDN
        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js">
*/

$(document).ready(function () {      //第一个函数是文档就绪函数 防止在页面渲染完成之前进行jQuery操作
    $("button#id").click(function () {
        $("p#id").hide();
    });
});
/*
    jQuery的语法是：
    $(选择器)操作

    选择器：
    css元素选择器：
    "元素"    "元素#id"    "元素.class"

    属性选择器 使用XPath表达式
    "[href]" 选取带有href属性的元素
    "[href='#']"   "[href!='#']"  选取href值等于和不等于#的值
    "[href$='.jpg']"  选取herf值中 以.jpg结尾的值
*/
$(document).ready(function () {
    $("button#demo").click(function () {
        $("p#demo").css("background-color", "red");    //.css可以改变元素的css样式
    });
});
/*
    jQuery事件：
    Event 函数	                        绑定函数至
    $(document).ready(function)	        将函数绑定到文档的就绪事件（当文档完成加载时）
    $(selector).click(function)	        触发或将函数绑定到被选元素的点击事件
    $(selector).dblclick(function)	    触发或将函数绑定到被选元素的双击事件
    $(selector).focus(function)	        触发或将函数绑定到被选元素的获得焦点事件
    $(selector).mouseover(function)	    触发或将函数绑定到被选元素的鼠标悬停事件
*/