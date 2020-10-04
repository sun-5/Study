<?php

//通过步骤做一个列表显示

$conn = mysqli_connect('localhost','root','root','book');//链接数据库 + 库名

//如果有错误，存在错误号
if(mysqli_errno($conn)){
    echo mysqli_error($conn);
    exit;
}
 
mysqli_set_charset($conn,'utf8');//字符集

$sql = "select id,username,createtime,createip from user order by id desc";
$res = mysqli_query($conn,$sql);//返回结果集

if($res && mysqli_num_rows($res)){
    //显示列表代码段
    echo '<table width="800" border="1">';
    while($row = mysqli_fetch_assoc($res)){
        echo '<tr>';
        echo '<td>'.$row['username'].'</td>';
        echo '<td>'.date('Y-m-d H:i:s',$row['createtime'].'</td>');
        echo '<td>'.long2ip($row['createip']).'</td>';
        echo '<td><a href="edit.php?id='.$row['id'].'">编辑用户</a></td>';
        echo '<td><a href="delete.php?id='.$row['id'].'">删除用户</a></td>';
        echo '</tr>';
    }
    echo '</table>';
}else{
    //提示没有结果的代码段
    echo '<p>暂无记录</p>';
}


















?>