/*
    初步实现服务器功能
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
    res.end('ok')
}).listen(3000,'192.168.0.105',()=>{
    console.log('running....')
})