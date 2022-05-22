/* 
    windows对象  代表了浏览器窗口

    screen对象：
        screen.width 访问者屏幕宽度
        screen.height 访问者屏幕高度
        screen.availWidth  可用宽度 减去诸如窗口工具条之类的界面特征
        screen.availHeight 可用高度 减去诸如窗口工具条之类的界面特征

    location对象：
        location.href 属性返回当前页面的 URL

    history对象
        history.back() 方法加载历史列表中前一个 URL  后退
        history forward() 方法加载历史列表中下一个 URL

    弹出框：
        警告框  alert()
        确认框  confirm()

    计时器：
        setTimeout() 方法  第一个参数 需要执行的函数  第二个参数 暂停的毫秒数
        clearTimeout() 方法停止执行 setTimeout() 中规定的函数
*/
//下面创建一个时间
function start() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("text").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(start, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
