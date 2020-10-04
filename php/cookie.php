<?php
//php会话管理和控制概述
/*
cookie会话技术
session会话技术
*/
/*
Cookie存在哪？
Chrome浏览器cookie文件存放路径：C:\Users\用户名\AppData\Local\
                            Google\Chrome\User Data\Default\Cookies

Domain 代表 cookies所属的网站
Name 代表 Cookie的名字
Value 代表 Cookie的值
Express 代表 Cookie有效期

*/
 setcookie(
     $name,$value,$time
 );
 $_COOKIE['name'];//读取name 的cookie

/*第一次登陆，通过用户输入的信息来确认用户
从db获取用户信息
数据库连接 比对用户名和密码 密码需要根据后台的加密方式然后比对
密码验证通过，设置cookies，把用户名和密码报存在客户端 设置时效一个月
最后跳转登陆后的欢迎页面

再次访问时候，通过cookie来识别用户
从db获取用户信息

*/
















?>
