<?php
//php操作mysql之前，必须开启mysql扩展
phpinfo();

/* php.ini中 扩展前面 ; 去除 表示开启
extension = php_mysql.dll  支持php5 php7不支持
extension = php_mysqli.dll 支持php5和php7
*/

// php数据库连接步骤
/*
1.连接数据库服务器
2.判断错误
3.选择数据库
4.设置字符集
5.准备sql语句
6.发送sql语句
7.判断是否执行正常或者遍历数据 读取 写入 修改删除
8.关闭数据库
*/

$con = mysqli_connect('locast','username','password');
if(!$con){
    die('Could not connect:'.mysql_error());
}else{
    echo '数据库连接成功！';
}
mysqli_select_db($con,'laoshi');

mysqli_set_charset('utf8');

$sql = "insert into money(username,age) values('$username','$age')";

mysqli_query($con,$sql);//发送sql语句


mysqli_close($con);






?>