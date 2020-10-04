<?php
// php图像处理
/*
1.生成验证码
2.图片缩放
3.图片水印
4.密保口令卡
5.柱状图...

*/
/*
php图片处理准备工作：
    php.ini查看php环境是否支持 gd库扩展开启 gd2配置文件修改

*/
phpinfo();


//php图像处理之图片处理函数画一张图
//使用imagecreate函数创建图片，返回资源
$img = imagecreate();

//php生成验证码
/*
实现过程：
    1.生成指定宽高的画布
    2.准备好字和需要生成的字符串
    3.每次执行，让背景填充随机的颜色（浅色系）
    4.在画布上画上随机的干扰元素（随机点，随机线，随机弧形等）
    5.写上4个文字
    6.输出header头，告诉浏览器按照某类型显示
    7.输出图像
    8.销毁图像资源
*/
check_code(20,20);
function check_code($width=100,$height=50,$num=4,$type='jpeg'){
    $img = imagecreate($width,$height);
    $string = '';
    for($i=0;$i<$num;$i++){
        $rand = mt_rand(0,2);
    }
}
$header = 'Content-type:image/'.$type;
/*
方案一：ascii编码
方案二：字符串 打乱后截取
*/









?>