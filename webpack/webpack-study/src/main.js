// main.js 是我们项目的js入口文件

//1.导入jquery
//import *** from *** 是ES6中导入模块的方式
//由于ES6代码太高级，浏览器不一定支持 解析，所以这一行会有问题,用webpack处理此文件
 import $ from 'jquery'

 //使用import导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
//注意： webpack 默认只能打包处理 JS类型文件，无法处理其他非 JS类型文件
//处理非JS类型的文件，需要安装第三方loader加载器
//1.如果打包处理css文件，需要安装 npm i style-loader css-loader -D
//2.打开webpack.config.js 这个配置文件，在里面，新增一个 配置节点，叫做module
//它是一个对象，有rules属性 是个数组，存放了所有第三方文件的 匹配 和 处理规则

 


// const $ = require('jquery')  node.js中引入模块操作

$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function(){
        return '#' + '4caf50'
    })
})

