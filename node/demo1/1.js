/*
    路径操作
*/
const path = require('path');
const { config } = require('process');
const { createRequireFromPath } = require('module');

//获取路径最后一部分
console.log(path.basename('/aa/ff/gg/aa/1.html'))

console.log(path.basename('/aa/ff/gg/aa/1.html','.html'))

//获取路径
console.log(__dirname);
console.log(path.dirname('/aaa/bbb/ccc/abc'));

//获取文件扩展名称
console.log(path.extname('1.txt'))

//路径的格式化处理
// path.format()  obj -> string
// path.parse()    string->obj
let obj = path.parse(__filename)
console.log(obj)
console.log(obj.base)
/*{
    root:'C:\\'  文件根路径
    dir : 'C:\\Users\\Administrator\\Desktop\\demo'  文件全路径
    base:'1.js'    文件名 
    ext:'.js'      扩展名
    name:'1'    文件名称
}*/

let aaa = {

    root:'C:\\'  ,
    dir : 'C:\\Users\\Administrator\\Desktop\\demo'  ,
    base:'1.js'    ,
    name:'1'    
}
let strpath = path.format(aaa)
console.log(strpath)

//判断是否为绝对路径
console.log(path.isAbsolute('/foo/bar'))
console.log(path.isAbsolute('C:/foo/..'))

//拼接路径 两个..表示上层路径，一个.表示当前路径
console.log(path.join('/aaa','bb/sd','/cc','../../'))

//规范路径
console.log(path.normalize('/fas//gah/db/fsdf/..')) //linux 
console.log(path.normalize('C:\\ccc\\\\bbb\\aaa\\..\\')) //windows

//相对路径计算 relative
console.log(path.relative('/aaa/bbb/ccc/ddd','/aaa/bbb/eee/fff')) //linux 
console.log(path.relative('C:\\aaa\\bbb\\ccc\\ddd','C:\\aaa\\bbb\\eee\\fff')) //windows

//解析路径
console.log(path.resolve('wwwroot','static/png/','../gif/img.gif'))

//两个特殊属性
console.log(path.delimiter) //表示路径分隔符 windows是\  linux 是 /
console.log(path.sep)//环境变量分隔符 windows ；  linux ：
