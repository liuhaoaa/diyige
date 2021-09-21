window.addEventListener('load', function() {
    // alert(1);
    // 1. 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得 focus 的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2. 利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    // 等着我们过度完成之后，再去判断 监听过度完成的事件 transitionend
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            // 去除过度效果 这样让我们的ul 快速跳到目标位置（第一张图片）
            ul.style.transition = 'none';
            // 重新赋值 继续无限滚动
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            // 重新赋值 继续无限滚动
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // 3. 小圆点跟随变化
        // 把ol里面li带有current类名的选出来去掉类名remove
        ol.querySelector('.current').classList.remove('current');
        // 当前索引号的 小li 加上 current add 
        ol.children[index].classList.add('current');
    });
    // 4. 手指滑动轮播图
    // 触摸元素 touchstart： 获取手指的初始位置
    var startX = 0;
    var moveX = 0; // 后面我们会使用这个移动距离所以我们要定义一个全局变量
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候停止定时器
        clearInterval(timer);
    });
    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子: 盒子原来的位置 + 手指移动的距离
        var translatex = -index * w + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过度效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    });
    // 手指离开 根据移动距离去判断是回弹还是播放上一张
    ul.addEventListener('touchend', function(e) {
        // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
        if (Math.abs(moveX) > 50) {
            // 如果右滑就是 播放上一张 moveX 是正值
            if (moveX > 0) {
                index--;
            } else {
                // 如果左滑就是 播放下一张 moveX 是负值
                index++;
            }
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
    });
})