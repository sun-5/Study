<?php
//php常量
echo
"
<h3>php常量</h3>
asdasd
asdasd
";


echo print('dasgasd');
print '|45656';
print_r('|4556867as');
echo "<hr>";
// date();//从1970年格林威治时间开始计算的秒数
$a = time();//当前时间对应的时间戳
echo $a;
echo "<hr>";
echo date('Y-m-d');
echo "<hr>";
echo microtime();//当前Unix时间戳以及微妙数
echo "<hr>";
echo date("Y 年 m月d日 H:i:s",12345678) ;
echo "<hr>";
echo strtotime('tomorrow 10 hours');
echo "<hr>";

//文件加载原理
// include require   
//include 碰到一次执行一次，同一个文件，多次加载，系统会执行多次
// include_once   系统碰到多次，也只会执行一次，只能包含一次
//require  include 本质都是包含文件，唯一区别在于包含不到文件时候，报错形式不一样
// include错误级别较轻warning，不影响代码执行，require要求较高Fatal error，后面代码不执行
//require_once  只能包含一次

//文件加载路径
/*
  绝对路径：从磁盘的根目录开始 
            Windows 盘符 C：/路径/php文件 
            Linux：/路径/php文件
          从网站根目录开始
          /：相对于网站主机名字对应的路径
          Localhost/index.php -> E:/server/apache/htdocs/index.php
  相对路径：从当前文件所在目录开始的路径
    . 或者 ./  表示当前文件夹
    ../ 上级目录（当前文件夹的上一层文件夹）

    
    
    

  */
?>