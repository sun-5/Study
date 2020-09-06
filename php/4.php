<?php
//函数
//function 是一种语法结构，将实现某一个功能的代码块（多行代码）封装到一个结构中，从而实现代码的重复利用

//函数定义语法
//函数有：function关键字，函数名，参数（形参，实参），函数体，返回值
/*基本语法：
    function abc(参数){
        函数体
        返回值：return 结果
    }
*/

function display(){
    echo 'hello world'; //没有返回值
};
display();

/*
函数执行的内存分析
1.读取代码进入代码段
2.根据代码逐行执行

编译和执行是分开的，先编译后执行

函数命名规范
由字母，数字，下划线组成，不能以数字开头

函数作为一种常用结构，一般遵循以下规则：函数名字一般代表着函数功能
1.驼峰法
2.下划线法

函数名字：在一个脚本周期中，不允许出现同名函数！！

*/
/*
参数详解

形参：形式参数，不具有实际意义的参数，是在行数定义时使用的参数
实参：实际参数，具有实际数据意义的参数，是在行数调用时使用的参数
形参是实参的载体：实参在调用时通常是需要传入到函数内部参与计算，那么需要实参给形参赋值

默认值
*/
function jian($num1=0,$num2=0){
    echo $num1-$num2;
};
/*
jian($num1) 默认值如果存在，可以不用传入
注意：1.默认值的定义是放在最后边的多个，不能左边形参有默认值，但是右边没有
函数外部定义的变量名字与函数定义的形参名字冲突（同名）是没有任何关联关系的
如果多个函数使用同样的形参名字也不冲突
*/

/*
引用传值
基本定义语法：function 函数名(形参1，&形参2){

}调用时候，必须给引用传值的参数位置，传入实际参数，而且参数本身必须是变量

*/
function dis($a,&$b){
    $a = $a * $a;
    $b = $b * $b;
    echo $a,'<br>',$b,'<br>';
};
$a  = 10;
$b = 5;
dis($a,$b);//先执行，b改变为25
echo '<hr>',$a,'<br>',$b;//输出为改变后的b
/*
100 25 /  10 25
说明：
函数在定义时候，对应的b形参采用的是取地址，所以实参传入之后，系统b取到了外部变量b的内存地址
而a取得是值，因此改变之后，a只改变了函数内部自己，b改变了所有引用b的值

*/
?>