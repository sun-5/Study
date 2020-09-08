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
    var_dump(func_get_arg(1));
    //获取所有参数
    var_dump(func_get_args());
    //获取参数数量
    var_dump(func_num_args());
}
//调用函数
function_exists('test') && test(1,'2',3,4);
?>