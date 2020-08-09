var nowIndex = 0,
    w = $('.wrapper').width(),//520
    len = $('.item').length,//5
    slider_timer = undefined,
    flag = true;
function init() {
    bindEvent();
    slider_auto();
}
function bindEvent() {  //绑定点击事件 左右按钮 索引点，点击后 开始特定运动
    $('.prevBtn').add($('.nextBtn')).add($('.item')).on('click', function () {
        if ($(this).attr('class') == 'prevBtn') {
            move('prev');
        } else if ($(this).attr('class') == 'nextBtn') {
            move('next');
        } else {
            var index = $(this).index();
            move(index);
        }
        changeOrderStyle(nowIndex);
    })
    $('.wrapper')
        .mouseenter(function () {
            $('.btn').css({ display: 'block' });
            clearTimeout(slider_timer);
        })
        .mouseleave(function () {
            $('.btn').css({ display: 'none' });
            clearTimeout(slider_timer);
            slider_auto();
        })
    $('.btn a').mouseover(function () {
        clearTimeout(slider_timer);
        slider_auto();
    })
}
function move(direction) {
    if (flag) {
        flag = false;
        var a = 1;
        if (direction == 'prev' || direction == 'next') {
            if (direction == 'prev') {
                if (nowIndex == 0) {
                    $('.img-box').css({ left: -(w * len) });
                    nowIndex = len - 1;
                } else {
                    nowIndex = nowIndex - 1;
                }
            } else {
                if (nowIndex == 4) {
                    a = 0;
                    $('.img-box').animate({ left: -(w * len) }, function () {
                        $(this).css({ left: 0 });
                        clearTimeout(slider_timer);
                        slider_auto();
                        flag = true;
                    })
                    nowIndex = 0;
                } else {
                    nowIndex = nowIndex + 1;
                }
            }
        } else {
            nowIndex = direction;
        }
        if (a) {
            $('.img-box').animate({ left: -(w * nowIndex) }, function () {
                clearTimeout(slider_timer);
                slider_auto();
                flag = true;
            });
        }
    }

}
function changeOrderStyle(index) {  //当前索引激活状态
    $('.active').removeClass('active');
    $('.item').eq(index).addClass('active');
}
function slider_auto() {           //
    slider_timer = setTimeout(function () {
        move('next');
        changeOrderStyle(nowIndex);
    }, 3000)
}
 
init();