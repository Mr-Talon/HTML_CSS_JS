var person = {
    name: "zcr",
    age: 19,
    sex: "male",
    selfInfo: function () {
        return this.name + "" + this.age + "" + this.nationality;
    }
};
document.getElementById("demo").innerHTML = person.name;

var x = person;  //这一句话类似引用 x是person的别名 不会新增一个对象

/* 
    对象属性：
        1、访问方法：
            类名.属性
            类名["属性"]
            类名[表达式]   前提是 表达式=“属性”
        2、属性添加：
            在一个已有的对象上 直接添加
        3、删除属性：
            delete 关键词从对象中删除属性
    
    对象方法：
        方法名：function （）；

        调用时: 类名.方法名（）  返回函数的返回值
                类名.方法名    没有括号的情况下 返回方法的定义
*/
person.nationality = "China"; //person对象添加一个属性
document.getElementById("demo1").innerHTML = person.nationality;
delete person.sex;
document.getElementById("demo2").innerHTML = person.selfInfo();
document.getElementById("demo3").innerHTML = person.selfInfo;

/* 
    对象访问器：
    setter 和 getter
*/
var camera = {
    price: 10000,
    lens: "70-200mm",
    cmos: "8代",
    Owener: "zqy",
    set OwenerName(name) {
        this.owener = name.toUpperCase();
    },
    get priceOfIt() {
        return this.price;
    }
};
document.getElementById("camera1").innerHTML = camera.priceOfIt;
camera.OwenerName = "zcr";
document.getElementById("camera2").innerHTML = camera.Owener;

/* 
    对象构造器;
    类的构造 这里和面向对象语言相比有一些区别
    类 不像java 是class关键字构造
    而是通过一个对象构造函数进行

*/
function Car(name, price) {
    this.name = name;
    this.price = price;
}
var car1 = new Car("audi", 100000000000);
document.getElementById("car1").innerHTML = car1.name;
