/* 
    数组：
    
    创建数组:
      **var 数组名=[];
        var 数组名=new Array("");
    
    可以在相同数组中存放不同类型的变量

    属性：
        length 属性返回数组的长度

    遍历数组：
        Array.foreach()
        常规for循环
    
    添加元素：
        push()方法

    
    数组方法：
    
    join() 方法也可将所有数组元素结合为一个字符串 参数为连接的符号
    pop() 方法从数组中删除最后一个元素
    push() 方法（在数组结尾处）向数组添加一个新的元素  参数为需要加入的元素
    splice() 方法可用于向数组添加新项 第一个参数是添加的起始位置 第二个参数是删除的个数 剩下的参数是需要添加的内容
    concat() 方法通过合并（连接）现有数组来创建一个新数组   调用该方法的数组和参数数组合并 形成一个新的数组 不会对调用的数组产生影响

    排序：
    sort() 按照字幕顺序 从小到大
    reverse() 方法反转数组中的元素 和sort()组合 可以形成逆序

    对于数字 sort（）先看的是第一位 所以会出现错误 常常和比值函数一起使用
    数组名.sort(function(a, b){return b - a}); 

    随机顺序排序：
    数组名.sort(function(a, b){return 0.5 - Math.random()}); 

    最大值与最小值：
    function myArrayMax(arr) {
        return Math.max.apply(null, arr);
    }
    function myArrayMin(arr) {
        return Math.min.apply(null, arr);
    }

*/

var coding, text, i
coding = ['c', 'c++', 'java', 'python', 'html', 'css', 'javascript'];
text = "<ul>";
for (i = 0; i < coding.length; i++) {
    text += "<li>" + coding[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;