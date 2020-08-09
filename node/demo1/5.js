/*
    大文件操作（流式操作）
    fs.createReadStream(path[,options])
    fs.createWriteStream(path[,options])
*/
const path = require('path');
const fs = require('fs');
const { callbackify } = require('util');
 
/*
    目录操作
    1.创建目录 
    fs.mkdir(path[,mode],callback)
    fs.mkdirSync(path[,mode])
*/
// 创建目录
// fs.mkdir(path.join(__dirname,'abc'),(err)=>{
//     console.log(err)
// })
// fs.mkdirSync(path.join(__dirname,'hello'))

//读取目录
//异步
// fs.readdir(__dirname,(err,files)=>{
//    files.forEach((item,index)=>{
//        fs.stat(path.join(__dirname,item),(err,stat)=>{
//            if(stat.isFile()){
//                console.log(item,'文件');
//            }else if(stat.isDirectory()){
//                console.log(item,'目录');
//            }
//        })
//    })
// });
//同步方式
/*let files = fs.readdirSync(__dirname);
files.forEach((item,index)=>{
    fs.stat(path.join(__dirname,item),(err,stat)=>{
        if(stat.isFile()){
            console.log(item,'文件');
        }else if(stat.isDirectory()){
            console.log(item,'目录');
        }
    })
})*/

// 删除目录
// fs.rmdir(path,callback)
// fs.rmdirSync(path)
// fs.rmdir(path.join(__dirname,'abc'),(err)=>{
//     console.log(err)
// })
fs.rmdirSync(path.join(__dirname,'hello'))