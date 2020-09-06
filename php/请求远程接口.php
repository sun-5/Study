<?php
//php请求聚合api接口数据

$starName = urlencode('白羊座');
$starDate = urlencode('today');
$url = "http://web.juhe.cn:8080/constellation/getAll?consName=".$starName."&starDate=".$starDate."&key=c98848759dc47649709882a5c6427483";
//url 需要编码中文为字符格式
$data = file_get_contents($url);
echo $data;
//输出data
?>