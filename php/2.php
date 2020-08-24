<?php
 
echo
'
<h3>php基本语法</h3>
1. < ?php 代表php开始，往下部分是php代码<br>
2. ?> 代表php结尾<br>
3.写完一段代码就需要加上分号;<br>
4.php文件命名用英文，不要用中文，不要特殊符号，不要中间加空格，严格区分大小写<br>
5.$变量名 不能以数字开头，不能带中文，严格区分大小写<br>
6. php 单行注释 // 双斜杠，单行注释 #，多行注释 /* */

<h3>php数据类型</h3>
1.整型：声明 变量整数，英文 int 例：$x=5;<br>
2.布尔类型：真/假 ，对逻辑判断的总结，例：$bool = false; 1为true;0为false<br>
3.浮点型 $fudian=123.1354;var_dump($fudian);打印变量的数据类型和值<br>
4.字符串 $aaa = `asdasdas`;<br>
    4.1字符串双引号可以解析变量，但是单引号不能解析变量；<br>
    4.2双引号内插入变量，变量后面如有英文或者中文字符，需要接上空格或者特殊字符<br>
    4.3双引号内插入变量，后面不想有空格，可以拿大括号将变量包起来{$name}<br>
    4.4双引号解析转义字符，单引号不解析转义字符，但是单引号能解析\' 和 \<br>
    4.5单引号效率高，尽可能使用<br>
    4.6双引号和单引号可以互插，双引号中插入单引号，单引号中插入变量，这个变量会被解析<br>
    4.7神奇的字符串拼接胶水 点 .  拼接字符串；<br>
    4.8将定界符 $name=<<<ABC 声明字符串视为双引号一样功能看待<br>
5.NULLl类型，空，不是 0 ，空格 也不是false;<br>
6.对象类型，Object复合类型，var_dump一个变量，类型为Object<br>
7.数组类型，Array复合类型，var_dump一个变量，类型为Array<br>
8.资源类型，resource，word文件，图片，音乐，视频，网页， 数据库等
';

echo   '<hr>';
//phpinfo();//显示php 版本，系统信息等
$x=5;
$y=6;
$x=8;//会把前面的x覆盖
echo  $x+$y;
echo   '<hr>';
echo 1;
echo   '<hr>';
$name = '张三';
$city = '上海';
echo $name;

$zifu = "{$name}喜欢小红 "."小白也喜欢";
//echo 直接输出
echo $zifu;
$fudian=123.1354;
//打印数据类型 和 值
var_dump($fudian);
$a = true;
if($a){
    echo '真的';
}else{
    echo '假的';
};
$n = null;
$n;//不赋值也是空
unset($n);//销毁值也是空
var_dump($n);
if(empty($n)){
    echo '执行了if函数； empty()函数包裹的变量为false或null都会被转为true--';
};
//isset()只要传入的值有一个变量为null，则返回false，否则返回true
$res = false;
var_dump(isset($res));
$shu = array(1,2,1,3,4);
var_dump($shu);
?>