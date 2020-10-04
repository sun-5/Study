<?php
// 数据系那是乱码终极解决办法
/*
9个要点：
1.html编码和MySQL编码一致
2.PHP编码和MySQL编码一直
3.如有header头发送字符集，请与数据库一致
4.<meta http-equiv="Content-Type" content="text/html;charset=utf8">要和页面的文字编码一致
5.数据库建库的字符集要统一
6.表的字符集要统一
7.列的字符集要统一
8.连接，校验的字符集要统一
9.结果的字符集要统一

一、文件编码
html 和 php文件编码 -> utf-8无BOM格式

二、header头编码
php中有header头，一定要utf-8
*/
header('content-type:text/html;charset=utf-8');

/* 
三、网页头文件编码
如果html文件编码是utf-8 
*/
//<meta http-equiv="Content-Type" content="text/html;charset=utf-8">;

//四、创建数据库编码  utf8_general_ci

//五、表和列创建的时候表为utf-8

//六、连接，结果，校验字符集设置 
mysqli——set_charset('utf8');
























?>