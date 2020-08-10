const fs = require('fs')
const path = require('path')

function getFileByPath(fpath){
    return new Promise(function (resolve,reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}
 //先读取1，再读取2，最后读取3
 //注意：通过.then 指定回调函数的时候，成功的回调必须传，失败的回调可以省略不传

 //如果，前面的promise执行失败，我们不想让后续的promise操作被终止，可以为每个promise指定失败的回调

getFileByPath('./files/1.txt')
.then(function(data){
    console.log(data + '成功了！')
    //读取文件2
    return getFileByPath('./files/2.txt')
 },function(err){
     //失败
     console.log('失败的结果：'+ err.message)
     //重新输出后续 后续继续执行
     return getFileByPath('./files/2.txt')
 })
 .then(function(data){
    console.log(data + '成功了！')
    //读取文件3
    return getFileByPath('./files/3.txt')
 })
 .then(function(data){
    console.log(data + '成功了！')
 
 })
 .catch(function(err){
     console.log(err.message)
 })
 console.log('okokok')

 //当我们需求：哪怕前面的promise执行失败，不要影响后续的正常执行，此时可以单独为每个promise指定失败的回调
 //需求2: 和上面的需求相反，如果后续promise执行依赖于前面promise执行结果，如果，前面失败，后面就没有执行的意义，
    // 此时需要，一旦报错，则立即终止promise 进入 .catch 中 处理异常err