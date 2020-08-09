/*
    post参数处理
*/
const QueryString = require('querystring')
const http = require('http')

//parse方法的作用就是把字符串转成对象
// let param = 'username=lisi&password=123'
// let obj = QueryString.parse(param)
// console.log(obj.username)

// //stringify 作用就是把对象转为字符串
// let obj1 = {
//     flag:'123',
//     abc:'hello'
// }
// let str1 = QueryString.stringify(obj1)
// console.log(str1)

http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
        let pdata = '';
        req.on('data',(chunk)=>{
            padta += chunk
        })
        req.on('end',()=>{
            console.log(pdata)
            let obj = QueryString.parse(pdata)
            res.end(obj.username+'---'+obj.password)
        })
    }
    
}).listen(3000,()=>{
    console.log('running...')
})