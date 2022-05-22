// 外部脚本不能包含 <script> 标签
/*
    输出：
    JavaScript 能够以不同方式“显示”数据：
        使用 window.alert() 写入警告框
        使用 document.write() 写入 HTML 输出
            仅用于测试
        使用 innerHTML 写入 HTML 元素
            最常用
        使用 console.log() 写入浏览器控制台

    变量:
        var来声明变量
        未定义初值 undefined

    NaN：
        NaN（Not a Number） 是一个number类型
        isNaN() 判断是否是数字

    Infinity：
        计算数时超出最大可能数范围时返回的值

    运算：
        **可以表示幂运算

    字符集：
        JS 采用Unicode编码 和java相同

    数据类型：
        number
        string
        boolean
        object
        “”
        undefined

    对象：
        对象中含有多个值
            名称:值
        可以是属性  也可以是方法

    事件：
        <元素 事件="相关的js代码">
        常见事件：
        事件	        描述
        onchange	    HTML 元素已被改变
        onclick	        用户点击了 HTML 元素
        onmouseover	    用户把鼠标移动到 HTML 元素上
        onmouseout	    用户把鼠标移开 HTML 元素
        onkeydown	    用户按下键盘按键
        onload	        浏览器已经完成页面加载

    字符串:
        长度 length 方法

        indexOf() 方法返回字符串中指定文本首次出现的索引
        lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引
            以上两个查找 第一个参数为需要查找的项目
                        第二个参数为开始寻找的位置
                        未找到返回-1

        slice() 提取字符串的某个部分并返回   参数为负数 就是从后往前
        substring() 和上面相似 但是不可以是负数
        substr() 第一个参数是起始位置  第二个参数是索引长度

        replace() 方法用另一个值替换在字符串中指定的值 第一个参数是被替换 第二个是替换
            如需执行大小写不敏感的替换，请使用正则表达式 /i
            如需替换所有匹配，请使用正则表达式的 /g
        通过 toUpperCase() 把字符串转换为大写
        通过 toLowerCase() 把字符串转换为小写

        concat() 连接两个或多个字符串  中间用逗号隔开

        trim() 方法删除字符串两端的空白符

        split() 将字符串转换为数组  参数为分隔符

    提取字符：
        charAt() 方法返回字符串中指定下标（位置）的字符串
        charCodeAt() 方法返回字符串中指定索引的字符 unicode 编码

*/