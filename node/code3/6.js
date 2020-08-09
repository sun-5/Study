 /*
    get参数处理 应用
*/
const http = require('http')
const path = require('path')
const url = require('url')

http.createServer((req,res)=>{
    let obj = url.parse(req.url,true)
    res.end(obj.query.username + '=========' + obj.query.password)
}).listen(3000,()=>{
    console.log('runing.....')
})

//   http://localhost:3000/?username=abc&password=123456
//    abc=========123456