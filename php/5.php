<?php
// php常用系统函数
/* 
输出函数
print():类似于echo输出提供的内容，本质是一种结构，返回1，可以不需要使用括号
print_r()：类似于var_dump，但是不输出数据的类型，只输出值（数组打印）
*/
echo print  'hello','<br>';
print 'hello <br>';

$a = 'hello<br>';
print_r($a);

echo '<hr>';

//时间函数
echo date('Y-m-d H:i:s',1599616800),'<br>';//后面指定时间戳，不指定就是当前时间戳转换
echo time(),'<br>';//当前时间戳
echo microtime(),'<br>';//微秒数 + 当前时间戳

//Strtotime() 只要正确格式关于时间的 转为 对应时间戳
echo strtotime('tomorrow 10 hours');

//数学函数
/*
max():指定参数中最大的值
min():比较两个数中较小的值
rand():得到一个随机数，指定区间的随机整数
mt_rand():与rand一样， 只是底层结构不一样，效率比rand高
round():四舍五入
cell():向上取整
floor():向下取整
pow()：求指定数字的指定指数次结果：pow(2,8) 2^8=256
abs():绝对值
sqrt():求平方根
*/

//有关函数的函数
/*
function_exists():判断指定的函数名字是否在内存中存在（帮助用户不去使用一个不存在的函数）
func_get_arg():在自定义函数中去获取指定数值对应的参数
func_get_args()：在自定义函数中获取所有的参数（数组）
func_num_args()：获取当前自定义函数的参数数量
*/

echo '<hr><pre>';
function test($a,$b){
    //获取指定参数
    var_dump(func_get_arg(1));// 0开始索引  填1为第二个参数
    //获取所有参数
    var_dump(func_get_args());
    //获取参数数量
    var_dump(func_num_args());
}
//调用函数
function_exists('test') && test(1,'2',3,4);

/*错误处理
系统或者用户对某些代码进行执行的时候，发现有错误，就会通过错误处理的形式告知程序员
错误分类
1.语法错误：用户代码不符合php规范，会导致编译不通过，所以代码不执行怕 parese error
2.运行时错误：代码编译通过，但是代码在执行过程中会出现一些条件不满足导致的错误 runtime error
3.逻辑错误：程序员在写代码时候不够规范，出现了一些逻辑性错误，导致代码正常执行，但是得不到想要的结果

错误代号
所有看到的错误代码在php中都被定义成了系统常量（可以直接使用）
1.系统错误：
E_PARSE：编译错误，代码不会执行
E_ERROR：fatal error，致命错误，会导致代码不能正确继续执行（出错的位置断掉）
E_WARNING：warning，警告错误，不会影响代码执行，但是可能得到意向不到的结果
E_NOTICE：notice，通知错误，不会影响代码执行
2.用户错误：E_USER——ERROR，E_USER——WARNING，E_USER——NOTICE
用户在使用自定义错误触发的时候，会使用到的错误代号（系统不会用到）
3.其他：E_ALL，代表着所有的错误，（通常在进行错误控制的时候使用比较多），建议在开发过程中使用

所有以E开头的错误常量（代号）其实都是由一个字节存储，然后每一种错误占据一个对应的位，
    如果想进行一些错误的控制，可以使用位运算进行操作
排除通知级别notice：E_ALL & ~E_NOTICE  只把notice排除
只要警告和通知：E_WARNING | E_NOTICE
*/

/*
错误触发
程序运行触发，系统自动根据错误发生后，对比对应的错误信息，输出给用户
人为触发：知道某些逻辑可能会出错，从而使用对应的判断代码来触发相应的错误提示
*/
header('Content-type:text/html;charset=utf-8');
$b = 0;
if($b==0){
    trigger_error('除数不能为0！');//默认notice，会继续执行
    //trigger_error('除数不能为0！',E_USER_ERROR);//默认error，不会往下执行
}
echo 'hello';
/*if($a=1){
    //比较符号写成了赋值符号 应为 $a==1
}*/

/*
错误显示设置
哪些错误该显示，以及该如何显示
在php中，其实有两种方式来设置当前脚本的错误处理
1.php的配置文件：全局配置：php.ini文件
Display_errors:是否显示错误
Error_reporting:显示什么级别的错误
2.可以在运行的php脚本中设置: 在脚本中定义的配置项级别比配置文件高（通常在开发当中都会在代码中去进行控制和配置）
Error_reporting():设置对应的错误显示级别
ini_set('配置文件中的配置项',配置值)
ini_set('error_reporting',E_ALL)
ini_set('display_errors',1)
*/

/*
错误日志设置
实际生产环境中，不会直接让错误赤裸裸的展示给用户
1.不友好
2.不安全：错误会暴露网站很多信息（路径，文件名）

所以在生产环境中，一般不显示错误，但是不可能避免会出现错误，这个时候不希望看到，但是又希望捕捉到可以让后台程序员去修改：
    需要保存到日志文件中，需要在php文件中或者代码中ini_set 设置对应error_log配置项
开启日志：log_errors= On
指定路径：error_log='E:/server/php5/errlog/php_errors.log'
*/

/*
自定义错误处理
最简单的错误处理：trigger_errors()函数，但是该函数不会阻止系统报错
php提供一种用户处理错误机制：用户自定义错误处理函数，然后将函数增加操作系统错误处理的句柄中，然后碰到错误后会执行用户自定义的错误函数

1.如何将用户自定义函数放到系统中？
set_error_handler()
2.自定义错误处理函数，系统有要求
 errno errstr 自定义错误处理函数的头两个必须存在的参数，系统后期调用该自定义函数时候，会给第一个和第二个传递对应的参数

 代码实现：
 1.自定义处理函数，注意参数
*/
function myError($errno,$errstr,$errflie,$errline){
    //$errno 系统提供的错误代码：E_NOTICE E_ALL
    //判断当前会碰到的错误有哪些
    if(!(error_reporting() & $errno)){//error_reporting()没有参数代表获取当前系统错误处理对应的级别
        return false;
    }
    //判断错误类型
    switch($errno){
        case E_ERROR:
        case E_USER_ERROR:
            echo 'fatal error in file'.$errfile.'on line'.$errline.'<br>';
            echo 'error info:'.$errstr;
            break;
        case E_WARNING:
        case E_USER_WARING:
            echo 'Warning in file'.$errfile.'on line'.$errline.'<br>';
            echo 'error info:'.$errstr;
            break;
        case NOTICE:
        case E_USER_NOTICE:
            echo 'Notice in file'.$errfile.'on line'.$errline.'<br>';
            echo 'error info:'.$errstr;
            break;
    }
    return true;
}
echo aaa;//报错
 
set_error_handler('myError');
?>