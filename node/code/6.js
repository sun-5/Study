/*
 文件操作案例（初始化目录结构）
*/
const path = require('path');
const fs = require('fs');

let root = "E:\\Desktop";
let fileContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>欢迎来到nodejs创建的项目</title>
</head>
<body></body>
</html>
`

//初始化数据
let initData = {
    projectName:'demo',
    data:[{
        name:'img',
        type:'dir'
    },{
        name:'css',
        type:'dir'
    },{
        name:'js',
        type:'dir'
    },{
        name:'index.html',
        type:'file'
    }
]
}

// 创建项目根路径
fs.mkdir(path.join(root,initData.projectName),(err)=>{
    if(err) return;
    //创建子目录和文件
    initData.data.forEach((item)=>{
        if(item.type =='dir'){
            // 创建子目录
            fs.mkdirSync(path.join(root,initData.projectName,item.name)); 
        }else if(item.type=='file'){
            // 创建文件并写入内容
            fs.writeFileSync(path.join(root,initData.projectName,item.name),fileContent);
        }
    })
})