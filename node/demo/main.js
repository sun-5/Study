/*
     demo包的入口
     package.json必须有 并且置于项目的根目录

  var md = require('markdown-it')();
var result = md.render('## markdown-it rulezz!')
console.log(result)
*/
const md = require('markdown-it')()
const path = require('path')
const fs = require('fs')

let tplPath = path.join(__dirname,'tpl.html')
let mdPath = path.join(__dirname,'demo.md')
let targetPath = path.join(__dirname,'demo.html')

//获取markdown文件
fs.readFile(mdPath,'utf-8',(err,data)=>{
     if(err) return;
     //对markdown内容进行转换
     let result = md.render(data);
     //读取模板内容
     let tpl = fs.readFile(tplPath,'utf-8',(err,tplData)=>{
          if(err) return;
          tplData = tplData.replace('<%content%>',result);
          //生成的最终页面 写入目标文件
          fs.writeFile(targetPath,tplData,(err)=>{
               console.log('转换完成')
          })
     })
})