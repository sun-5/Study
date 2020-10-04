<?php
//php分页制作
// 1.数据库连接 设置
include 'config.php';//数据库配置文件 
$conn = mysqli_connect(DB_HOST,DB_USER,DB_PWD,DB_NAME);
if(mysqli_errno($conn)){
    mysqli_error($conn);
    exit;
}
mysqli_set_charset($conn,DB_CHARSET);
//2.实现分页
/*
首页：第一页
上一页：当前页-1
下一页：当前页+1
尾页：最后一页
当前页：当前所在页码
总页数：共有多少页面
limit:偏移量 每页数量 第n页： （n-1）*5
offset值为（n-1）*5，num为规定的 5
*/
/*
第一步：计算分页所需参数
通过查询user表的count(id),得到总数$count*/
$count_sql = 'selcet count(id) as c from user';
$result = mysqli_query($conn,$count_sql);//执行sql语句
$data = mysqli_fetch_assoc($result);//结果取出

$count = $data['c'];//得到总的用户数
//$page当前页码
$page = isset($_GET['page'])?(int)$_GET['page']:1;//接收用户传的页码

$num = 5 ;//每页显示
$total = ceil($count/$num);//得到总页数

if($page<=1){
    $page = 1;
}
if($page>=$total){
    $page = $total;
}

$offset = ($page-1)*$num;
$sql = "selcet id,username,createtime,createip from user order by id desc limit $offset,$num";
//偏移量从$offset开始往后$num个
$result = mysqli_query($conn,$sql);//执行 获取对应数量的数据

if($result&&mysqli_num_rows($result)){
    //存在数据则循环将数据显示出来
    echo '<table width="800" border="1">';
    while($row = mysqli_fetch_assoc($result)){
        echo <<<HHHHH
        <tr>
        <td>{$row['username']}</td>
        <td>{date('Y-m-d H:i:s',$row['createtime'])}</td>
        ........
        </tr>
HHHHH
    }
       echo <<<EDC
       <tr>
       <td colspan="5">
       <a href="page.php?page=1" >首页</a> 
        <a href="page.php?page={$page-1}" >上一页</a> 
        <a href="page.php?page={$page-1}" >下一页</a>
        <a href="page.php?page={$total}" >尾页</a>
        当前是第{$page}页,共{$total}页
       </td>
       </tr>
       </table>
EDC
}else{
    echo '没有数据';
}
mysqli_close($conn);












?>