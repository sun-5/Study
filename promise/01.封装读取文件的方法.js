//需求：封装一个方法，给你一个要读取文件的路径，这个方法要能帮我读取文件，并把内容给我

const fs = require('fs')
const path = require('path')

//普通读取文件的方式
/*
fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
    if(err) throw err
    console.log(dataStr)
})
*/
//初衷：给定文件路径，返回读取到的内容
//我们可以规定，callback中有两个参数，第一个是失败结果，第二个是成功的结果
//同时我们规定，如果成功后，返回的结果应该位于 callback 参数的第二个位置；此时，
//第一个位置由于没有出错，所以放一个null。如果失败，则第一个位置放error对象，第二个位置放一个undefined
function getFileByPath(fpath,callback){
    fs.readFile(path.join(fpath),'utf-8',(err,dataStr)=>{
       //如果报错 进入if分支，if后面代码就没有必要执行
        if(err) return callback(err)
        // console.log(dataStr)
        callback(null,dataStr)

    })
}
// var res = getFileByPath(path.join(__dirname,'./files/1.txt'))
// console.log(result)

getFileByPath(path.join(__dirname,'./files/1.txt'),(err,dataStr)=>{
    // console.log(dataStr)
    if(err) return console.log(err.message)
    console.log(dataStr)
})
