function myFunction() {
    var x;
    x = document.getElementById("numb").value;

    var text;
    if (x < 1 || x > 10 || isNaN(x)) {
        text = "输入无效";
    }
    else {
        text = "输入有效";
    }

    document.getElementById("demo").innerHTML = text;
}

/*
    还有一种比较智能的方法 输入的各种API
    1、checkValidity() 方法
        相关属性：
        validationMessage	包含当 validity 为 false 时浏览器显示的消息



    function myFunction() {
        var x;
        x = document.getElementById("numb");

        if (!x.checkValidity()) {
            document.getElementById("demo").innerHTML =x.validationMessage;
        }
        else {
            document.getElementById("demo").innerHTML = "输入有效";
        }
    }
*/

