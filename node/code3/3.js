/*
    响应完整的页面信息
*/
const http = require('http')
const path = require('path')
const fs = require('fs')

//根据路径读取文件的内容，并且响应到浏览器
let readFile = (url,res)=>{
    fs.readFile(path.join(__dirname,'www',url),'utf-8',(err,fileContent)=>{
        if(err){
            res.end('server error')
        }else{
            res.end(fileContent)
        }
    })
}

http.createServer((req,res)=>{
    //处理路径的分发
    if(req.url.startsWith('/index')){
        readFile('index.html',res)
    }else if(req.url.startsWith('/about')){
        readFile('about.html',res)
     }else if(req.url.startsWith('/list')){
        readFile('list.html',res)
    }else{
        //设置响应类型和编码
        res.writeHead(200,{
            'Content-type':'text/plain;charset=utf-8',
        })
        res.end('页面被狗狗叼走了')
    }
}).listen(3000,'192.168.31.194',()=>{
    console.log('running....')
}) 