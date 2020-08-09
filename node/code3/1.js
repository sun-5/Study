/*
    处理请求路径的分发
    1.requset 请求对象 是Class：http.IncomingMessage的实例对象
    2.response 响应对象 是Class：http.ServerResponse的实例对象
*/
const http = require('http')
// //创建服务器实例对象
// let server = http.createServer()
// //绑定请求事件
// server.on('request',(req,res)=>{
//     res.end('hello')
// })

// server.listen(3000) //监听端口

http.createServer((req,res)=>{
   // res.end(req.url)
   //req.url 可以获取url中的路径 端口之后的部分
    if(req.url.startsWith('/index')){
        res.write('hello')//write向客户端相应内容 可以写多次
        res.write('hi')
        res.end('index')//end方法完成响应 也可以什么都不写 仅能一次
    }else if(req.url.startsWith('/about')){
        res.end('about')
    }else{
        res.end('no content')
    }
}).listen(3000,'192.168.0.105',()=>{
    console.log('running....')
}) 