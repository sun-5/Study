<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>单文件上传</title>
</head>
<body>
    <!-- 文件上传之页面html 部分 -->
<form action="" method='post' enctype='multipart/form-data'>
<input type="file" name='myfile'>
<input type="submit" value="上传">

</form>

</body>
</html>


<?php
echo '<pre>';
var_dump($_FILES['myfile']);
echo '</pre>';

//第一步：判断错误码
if($_FILES['myfile']['error']>0){
    switch($_FILES['myfile']['error']){
        //错误码不为0，即文件上传过程中出现了错误
        case '1':
            echo '文件过大';
        break;
        case '2':
            echo '文件超出指定大小';
        break;
        case '3':
            echo '只有部分文件被上传';
        break;
        case '4':
            echo '文件没有被上传';
        break;
        case '6':
            echo '找不到指定文件夹';
        break;
        case '7':
            echo '文件写入失败';
        break;
        default:
            echo '上传出错<br/>';
       
    }
}else{
    //错误码为0，上传成功，进行后续处理
// 第二步：判断文件是否超出大小
    $MAX_FILE_SIZE = 100000;
    if($_FILES['myfile']['size']>$MAX_FILE_SIZE){
        exit('文件超出指定大小');
    }
//第三步：判断文件的mime类型是否正确
    $allowSuffix = array('jpg','gif'); 
    $myImg = explode('.', $_FILES['myfile']['name']);
    $myImgSuffix = array_pop($myImg);
    if(!in_array($myImgSuffix,$allowSuffix)){
        exit('文件后缀名不符');
    }

    $allowMime = array(
        'image/jpg',
        'image/jpeg',
        'image/pjpeg',
        'image/gif',
    );

    if(!in_array($_FILES['myfile']['type'],$allowMime)){
        exit('文件格式不正确，请检查');
    }
//第四步：生成指定的路径和文件名
    $path = 'upload/images/';
    $name = time().rand(0,9).'.'.$myImgSuffix;
//第五步：判断是否是上传文件 并未真正上传 当前是临时文件目录
    if(is_uploaded_file($_FILES['myfile']['tmp_name'])){
        if(move_uploaded_file($_FILES['myfile']['tmp_name'],$path.$name)){
                //第六步：移动文件到指定位置    
                move_uploaded_file($_FILES['myfile']['tmp_name'],$path.$name);    
                echo '上传成功';
            }else{
                echo '上传失败';
            }
    }else{
        echo '不是上传文件';
    }



}

















?>