<?php
include 'config.php';
//先链接数据库
$id = (int)$_POST['id'];

if(trim($_POST['password'])){
    $password = md5(trim($_POST['password']));
    $sql = "update user set password={$password} where id={$id}";

}else{
    echo '修改成功';
}
$res = mysqli_query($conn,$sql);
if($res){
    echo '修改成功';
}










?>