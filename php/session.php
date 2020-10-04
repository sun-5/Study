<?php
// 开启session session记录在服务端  cookie记录在客户端
session_start();

$_SESSION['name']='小明';//session数据赋值

echo $_SESSION['name'];//和数组一样使用
//销毁数据
unset($_SESSION['name']);
$_SESSION=array();//空数组赋值
session_destroy();//销毁当前会话全部数据 并结束当前会话，但不会重置当前会话所关联的全局变量

$_SESSION=array('name'=>'小明');//session数据赋值数组

//session的扩展：php.ini配置文件中 session.save_handler = files
//session的默认目录：session.save_path = '/tmp'
?>