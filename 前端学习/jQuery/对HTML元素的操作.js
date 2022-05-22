/* 
    获取网页内容：
    text()  文本内容
    html()  元素内容 包括html标记
    val()  字段的值

    获取属性：
    attr() 

    设置内容：
    text()  在括号内  "需要添加的内容"
    html()
    val()

    设置属性：
    attr()  第一个参数需要设置的属性加""  第二个参数是属性的值加""  中间逗号隔开
    也可以是多个属性  中间用冒号隔开

    添加项目：
    append() 方法在被选元素的结尾插入内容
    prepend() 方法在被选元素的开头插入内容

    删除项目：
    remove() 方法删除被选元素及其子元素
    empty() 方法删除被选元素的子元素
        div下包含了p
        remove（）方法会把div也删除
        empty（）方法不会删除div
        方法里也可以有参数对id和类进行过滤

*/
$(document).ready(function () {
    $("#btn1").click(function () {
        alert($("#test").text())
    })
    /* 
        addClass() 方法 给指定元素添加类别 可以用作css样式的变换
        removeClass() 方法  移出css类
    */
    $("#btn3").click(function () {
        $("p").addClass("blue");
    })
    $("#btn4").click(function () {
        $("div").addClass("important");
    })
    /* 
        设置css样式
        css("属性名") 方法返回对应的属性值
        css("属性名","值") 设置css样式

        width() heigth()  返回不包括内外边距和边框的长宽
        innerWidth()  innerHeigth()  返回包括内边距的长宽
        outerWidth()  outerHeigth()  返回包括内外边距的长宽
        outerWidth(true)  outerHeight(true)  返回包括内外边距加边框的长宽
        
    */
})