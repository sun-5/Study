 /*
    get参数处理 
*/

const url = require('url')

// let str = 'http://www.baidu.com/abc?flag=123&keyword=java'  
// let ret = url.parse(str,true)//加true之后 query变为对象 //字符串转为对象
// console.log(ret)
// console.log(ret.query.keyword)

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null, 用户名
//     host: 'www.baidu.com', 域名 包括端口
//     port: null,  端口
//     hostname: 'www.baidu.com', 域名 不包括端口
//     hash: null,  #后面的值
//     search: '?flag=123&keyword=java', 
//     query: 'flag=123&keyword=java',
//   query: [Object: null prototype] { flag: '123', keyword: 'java' },
//     pathname: '/abc',
//     path: '/abc?flag=123&keyword=java', 路径：域名后面的所有部分
//     href: 'http://www.baidu.com/abc?flag=123&keyword=java'
//   }


let obj = {
 
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'www.baidu.com',
        port: null,
        hostname: 'www.baidu.com',
        hash: null,
        search: '?flag=123&keyword=java',
        query: 'flag=123&keyword=java',
        pathname: '/abc',
        path: '/abc?flag=123&keyword=java',
        href: 'http://www.baidu.com/abc?flag=123&keyword=java'
    
}
let ret1 = url.format(obj) //对象转为字符串
console.log(ret1)

