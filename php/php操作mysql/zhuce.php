<form action="connect.php" method='test'>
用户名：<input type="text" name='username'><br/>
密码：<input type="password" name='password'><br/>
重复密码：<input type="password" name='repassword'><br/>
<input type="submit" value='提交'>
</form>

<?php
if(trim($_POST['password'])!=trim($_POST['repassword'])){
    exit('两次密码不一致，请返回上一页');
}
$username = trim($_POST['username']);//去除字符串头尾空格
$password = md5(trim($_POST['password']));

$time = time();
$ip = $_SERVER['REMOTE_ADDR'];//用户注册ip

echo $username.'/'.$password;DIE;

$conn = mysqli_connect('localhost','root','root');//链接数据库

//如果有错误，存在错误号
if(mysqli_errno($conn)){
    echo mysqli_error($conn);
    exit;
}
mysqli_select_db($conn,'book');//选择数据库
mysqli_set_charset($conn,'utf8');//字符集

$sql = "insert into user(username,password,createtime,createip) 
values({$username}.','.{$password}.','.{$time}.','.{$ip})";

$result = mysqli_query($conn,$sql);//写入数据
if($result){
    echo '成功';
}else{
    echo '失败';
}
echo '当前用户插入的ID为：'.mysqli_insert_id($conn);

mysqli_close($conn);//关闭资源


?>