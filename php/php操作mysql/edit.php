<?php
//编辑用户
include 'config.php';

$conn = mysqli_connect('localhost','root','root');

//获取用户传过来的需要编辑的id
if(is_numeric($_GET['id'])){
    $id = (int)$_GET['id'];
}else{
    echo '数据不合法';
    exit;
}

//组合sql语句 获取对应id 和 用户名
$sql = "select id,username from user where id in($id)";

$res = mysqli_query($conn,$sql);

$data = mysqli_fetch_assoc($res);
 
?>
<form action="update.php" name="post">
用户名：<input type="text" name="username" value="<?php echo $data['username']?>" readonly>
密码：<input type="password" name="password"><br/>
<input type="hidden" value="<?php echo $data['id'];?>" name='id'>
<input type="subbmit" value="提交">
</form>