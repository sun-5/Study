//1.Promise 是一个构造函数，那么我们就可以额 new Promise() 得到一个Promise 的实例

//2.在Promise 上，有两个函数，分别叫做 resolve （成功之后的回调函数） 和 reject（失败之后的毁掉函数）

//3.在 Promise 构造函数的 prototype 属性上，有一个 .then()方法，也就是说，只要是Promise 构造函数创建的实例，都可以访问到 .then() 方法

//4.如果 Promise 表示一个 异步操作，每当我们new一个Promise 实例，这个实例 就表示一个具体的异步操作

//5.既然 Promise 创建的实例是一个异步操作，那么这个异步操作的结果，只能有两种状态

//5.1 状态1：异步执行成功，需要在内部调用成功的回调函数 resolve 把结果返回
//5.2 状态2：异步执行失败，需要在内部调用失败的回调函数，reject 把结果返回
//5.3 由于 Promise 的实例，是一个异步操作，所以内部拿到操作的结果后，无法使用 return把操作结果返回给调用者，只能使用回调函数的形式，来把 成功 或者 失败 的结果，返回给调用者

//6.我们可以在new 出来的 Promise 实例上，调用 .then()方法，【预先】为这个 Promise 异步操作，指定 成功（resolve）和失败（reject）回调函数

//这里new 出来的 promise 只是代表【形式上】的一个异步操作
//我们只知道她是一个异步操作，但是具体异步操作内容不清楚
// var promise = new Promise() 

// var promise = new Promise(function(){
//     //function 内部就是具体的异步操作！

// }) 


const fs = require('fs')
const path = require('path')

function getFileByPath(fpath) {
    var promise = new Promise(function (resolve,reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
    return promise
}

 var p = getFileByPath('./files/1.txt')
 p.then(function(data){
    console.log(data + '成功了！')
 },function(err){
    console.log(err.message + '失败了！')
 })