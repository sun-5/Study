/*
    响应完整的页面信息  优化静态资源
*/
const http = require('http')
const path = require('path')
const fs = require('fs')



http.createServer((req,res)=>{
   fs.readFile(path.join(__dirname,'www',req.url),(err,fileContent)=>{
       if(err){
           //没有找到对应文件
           res.writeHead(404,{
               'Content-Type':'text/plain;charset=utf-8'
           })
           res.end('页面被狗狗叼走了')
       }else{
           //获取青丘文件的后缀
           //如果后缀合理，就获取到标准的响应格式
           //如果响应的内容是文本 就设置成utf-8编码
           //设置响应头信息
           res.end(fileContent)
       }
   })
}).listen(3000,()=>{
    console.log('running....')
}) 