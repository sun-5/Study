/*
    异步I/O input/output
    1.文件操作
    2.网络操作

    浏览器中存在异步操作：
    1.定时任务
    2.事件处理
    3.Ajax回调处理

    js的运行时单线程的处理 一旦遇到耗时任务，会卡死 后面无法执行
    引入事件队列机制 

    Node.js中的事件模型与浏览器中的事件模型类似
    单线程+事件队列

    Node.js 中异步执行的任务
    1.文件I/O
    2.网络I/O
*/

/*
    文件操作

*/
const fs = require('fs'); //引入文件模块
fs.stat('./data.txt',(err,stat)=>{
    //一般回调函数的第一个参数是错误对象，如果err为null，表示没有错误，否则表示报错 需要终止程序
    if(err) return;
    console.log(err)
    if(stat.isFile()){
        console.log('文件')
    }else if(stat.isDirectory()){
        console.log('目录')
    }
    console.log(stat)
    /*
    
    atime:  文件访问时间
    ctime： 文件状态修改时间  如：文件权限
    mtime： 文件数据修改时间
    birthtime：文件创建的时间
    */
})

// 同步操作
console.log(1)
let ret = fs.statSync('./data.txt')
console.log(ret)
console.log(2)
