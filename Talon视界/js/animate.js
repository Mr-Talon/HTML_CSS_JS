function animate(obj, target, callback) {
    // 清楚定时器 防止定时器叠加
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 定义步长变量
        // 这是一个逐渐减小的步长
        // 用目标位置减去现在的位置
        var step = (target - window.pageYOffset) / 10;
        // 对于大于零的数 向上取整 防止因为除法的问题导致不能滚动到目标位置
        // 对于小于零的数（反向运动） 向下取整  
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 达到目标位置停止定时器
        if (obj.pageYOffset == target) {
            clearInterval(timer);
            callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
    }, 15)
}