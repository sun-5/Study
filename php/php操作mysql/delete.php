<?php
//删除用户
include 'config.php';

$conn = mysqli_connect('localhost','root','root');

//获取用户传过来的需要删除的id
if(is_array($_POST['id'])){
    $id = join(',',$_POST['id']);
}else if(is_numeric($_GET['id'])){
    $id = (int)$_GET['id'];
}else{
    echo '数据不合法';
    exit;
}
//组合sql语句

$sql = "delete from user where id in($id)";

$res = mysqli_query($conn,$sql);

if($res){
    echo '删除成功';
}else{
    echo '删除失败';
}




?>