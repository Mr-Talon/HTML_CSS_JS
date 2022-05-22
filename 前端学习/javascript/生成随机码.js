function creatCode() {
    var chars = ["1", "2", "3", "a", "b", "c"];
    var code = "";

    for (var i = 0; i < 3; i++) {
        var pos = Math.floor(Math.random() * (chars.length - 1))
        code += chars[pos];
    }

    document.getElementById("code").innerHTML = code;
}