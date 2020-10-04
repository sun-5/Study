<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多文件上传</title>
</head>
<body>
   
<form action="" method='post' enctype='multipart/form-data'>
<input type="file" name='file[]'>
<input type="file" name='file[]'>
<input type="submit" value="上传">

</form>

</body>
</html>


<?php
echo '<pre>';
var_dump($_FILES);//打印$_FILES 查看数组结构  两个上传文件的信息
echo '</pre>';
// for循环取出两个数组的信息
for($i=0;$i<count($_FILES['file']['name']);$i++){
//is_uploaded_file判断是上传文件并且没有出错
    if(is_uploaded_file
        ($_FILES['file']['tmp_name'][$i]) &&
        $_FILES['file']['error'][$i]==0){
//move_uploaded_file移动文件到指定位置 并使用文件原名
            if(move_uploaded_file
                ($_FILES['file']['tmp_name'][$i],
                'upload/'.$_FILES['file']['name'][$i])){
                    echo "上传成功";
                }else{
                    echo '上传失败';
                }
    }else{
        echo '上传失败';
    }
}
















?>