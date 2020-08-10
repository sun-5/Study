//需求：封装一个方法，给你一个要读取文件的路径，这个方法要能帮我读取文件，并把内容给我

const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(path.join(fpath), 'utf-8', (err, dataStr) => {
        if (err) return errCb(err)
        succCb(dataStr)
    })
}


    getFileByPath(path.join(__dirname, './1.txt'),function(data){
        console.log(data + '成功了！')
    },function(err){
        console.log(err.message + '失败了！')
    })


//需求：先读取文件1，再读取文件2，最后读取文件3
/* 回调地狱 回调嵌套
getFileByPath(path.join(__dirname, './1.txt'), function (data) {
    console.log(data + '成功了！')
    getFileByPath(path.join(__dirname, './2.txt'), function (data) {
        console.log(data + '成功了！')
        getFileByPath(path.join(__dirname, './3.txt'), function (data) {
            console.log(data + '成功了！')
        })
    })
})
*/