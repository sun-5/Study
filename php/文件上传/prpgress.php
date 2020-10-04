<?php

// 开启session，注意在session_start()之前，不要有想浏览器输出内容的动作，否则可能引起错误
session_start();

//ini_get()获取php.ini中环境变量的值
$i = ini_get('session.upload_progress.name');

//ajax中使用get方法，变量名称为ini文件中定义的前缀 拼接 传过来的参数
$key = ini_get('session.upload_progress.prefix').$_GET[$i];

//判断SESSION中是否有上传文件的信息
if(!empty($_SESSION[$key])){
    //已上传大小
    $current = $_SESSION[$key]["bytes_progressed"];
    //文件总大小
    $total = $_SESSION[$key]["content_length"];

    //向ajax返回当前的上传进度百分比
    echo $current<$total ? ceil($current/$total*100):100 ;
}

























?>