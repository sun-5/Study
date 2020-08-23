<?php

if($_SERVER['REQUEST_METHOD']=='GET'){
    $month = $_GET['month'];
    $day = $_GET['day'];
    $urlget='http://api.juheapi.com/japi/toh?key=72e36136a8be1dba4b025a34fa578ef4&v=1.0&month='.$month.'&day='.$day;
    $htmlget = file_get_contents($urlget);
    echo $htmlget;

}
 
if($_SERVER['REQUEST_METHOD']=='POST'){
    $month = file_get_contents("php://input");
    $day = file_get_contents("php://input");
    $urlpost='http://api.juheapi.com/japi/toh?key=72e36136a8be1dba4b025a34fa578ef4&v=1.0&month='.$month.'&day='.$day;
    $htmlpost = file_get_contents($urlpost);
    echo $htmlpost;
}
 
 
?>