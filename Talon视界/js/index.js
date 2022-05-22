window.addEventListener('load', function () {
    // 这个文档是整个网页的js
    // 
    // 网页最上端的进度条 搭配css可以直接使用
    var bar = document.getElementById("bar");
    var dHeight = document.documentElement.scrollHeight;
    //网页文档的总高度
    var wHeight = document.documentElement.clientHeight;
    //客户屏幕的高度
    document.addEventListener("scroll", function (e) {
        //滚动事件监听
        let nHeight = e.target.documentElement.scrollTop
            || document.body.scrollTop;
        //获取当前滚轮高度
        // console.log(nHeight);
        let p = nHeight / (dHeight - wHeight) * 100 + "%";
        //获取进度信息
        bar.style.width = p;
    })

    //下拉菜单jq
    $(function () {
        $(".header-top li").hover(function () {
            $(this).children("ul").stop().slideToggle();
        })
    })

    // 返回顶部程序
    $(function(){
        var infoTop=$("#info").offset().top;
        $(window).scroll(function(){
            if($(document).scrollTop()>=700){
                $("#goBack").slideDown(300,"swing");
            }
            else{
                $("#goBack").slideUp(300,"linear");
            }
        })
    })
    var goBack = document.querySelector('#goBack');
    goBack.addEventListener('click', function () {
        animate(window, 0);
        // 返回顶部动画 
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
                if (window.pageYOffset == target) {
                    clearInterval(timer);
                    callback && callback();
                }
                window.scroll(0, window.pageYOffset + step);
            }, 20)
        }
    })


    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay:true,
        delay:6000,
    })
});


