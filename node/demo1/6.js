/*
    写文件操作
*/
const fs = require('fs');
const path = require('path');

let strpath = path.join(__dirname,'data.txt');
// fs.writeFile(strpath,'hello nihao a !','utf-8',(err)=>{
//     if(!err){
//         console.log('文件写入成功')
//     }
// })
// let buf = Buffer.from('hi')
// fs.writeFile(strpath,buf,'utf-8',(err)=>{
//    if(!err){
//        console.log('文件写入成功')
//    }
// })

//同步操作
fs.writeFileSync(strpath,'tom')