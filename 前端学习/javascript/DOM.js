 /* 
    DOM查找：
        HTML元素
        1、按ID查找  精确查找一个元素
            document.getElementById("id")  只能用于document上
        
        2、按标签名查找   
            parent.getElementByTagName("标签名")
            parent为一个父节点 比如HTML中body里包含了div body是div的父元素
            按标签查找找的是父节点下所有子代节点  并且返回一个集合（数组）  即使只查找到一个元素也要使用[0]来索引
        
        3、按name查找
            document,grtElementByName("name属性值")
            查找DOM树下所有具有name属性值的元素

        4、按类名查找   
            parent.getElementByClassName("标签名")
            返回一个集合

        CSS元素
        1、按照选择器查找
            parent.querySelector("选择器名")
            只能查找一个选择器

        2、按照选择器多个查找
            parent.querySelectorAll("选择器名……")
            可以查找多个选择器


    DOM修改:
        可以先用查找将元素保存到一个js变量里面  h
        h.setAttribute(attribute, value)  把h的相关属性设置成value值

        h.removeAttribute("属性名")  删除相关属性

        h.style.样式名=“新的样式属性”

    DOM事件：
        onclick  用户点击发生的事件
        onlode/onunlode  用户打开或关闭页面发生的事件
        onchange  事件经常与输入字段验证结合使用
 */