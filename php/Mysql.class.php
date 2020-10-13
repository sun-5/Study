<?php
// 数据库封装
abstract class aDB{

}
class Mysql extends aDB{
    //链接数据库，从配置文件读取配置信息
    public function conn(){
        $cfg  = include './config.php';
        var_dump($cfg);
    }

}


















$mysql = new Mysql();





?>