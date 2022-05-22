/* 
    js的函数可以保存在一个变量里面
        var x = function (a, b) {return a * b};
        变量x 可以充当函数名来使用

    箭头函数：
    const x=(x,y)=>{return x*y};
    箭头函数没有this指针

    默认形参：
    当函数的实际参数小于实际参数的值时，没有提供的实参会显示undefined
    我们可以通过设置一个if语句来给函数设置默认形参

    arguments对象:
    对于参数比较多的函数 js提供了arguments对象作为函数参数的数组
    x=函数名(参数，参数，参数);
    function 函数名(){
        var i,sum=0;
        for(i=0;i<arguments.length;i++){
            sum+=arguments[i];
        }
        return sum;
    }

    函数的参数是通过值传递的 也就是说函数无法改变形参的数据
    
    call
    call允许js的一个对象方法去调用另外一个对象的属性
    例如：
    var x={
        speakName:function(){
            return "我叫"+this.name;
        }
    }
    var person={
        name:zcr,
        age:19
    }
    x.sprakName.call(person);
    call有一种改变this指针指向的意思 
    如果该方法还有参数 如 speakName:function(x,y)  在call中也可以出现参数传递

    apply与call的区别
    call() 方法分别接受参数。
    apply() 方法接受数组形式的参数。

*/
const f = (x, y) => { return x * y };   //箭头函数的使用
document.getElementById("demo").innerHTML = f(2, 3);