/*
    npm是一个平台  
        一个工具 包管理管理工具 安装的环境

*/
/*
全局安装 -g  位于 node.js环境 node_global 目录中，全局安装的包一般用于命令行工具
本地安装    一般用于开发具体的某种功能
    npm常用命令
    1.安装包（没有指定版本号，安装最新版本）
        npm install -g 包名称  全局
        npm install 包名称     本地

    2.安装包时候可以指定版本
    npm install -g 包名称@版本号  全局

    3.卸载包
    npm uninstall -g 包名称  全局
    npm uninstall 包名称     本地

    4.更新包（更新到最新版本）
    npm update -g 包名称  全局 
    npm update 包名称     本地

*/
/*
    入口文件
    package.json必须在包的根目录下
    二进制文件应该在bin目录
    js代码在lib
    文档在doc目录
    单元测试应在test目录
*/
/*
name：包名字
version：包版本，x.x.x的格式，符合语义化版本规则
description：一些描述信息
main：入口文件，一般是index.js
scripts：指定了运行脚本命令的npm命令行缩写，默认是空的test
author：作者信息
license：许可证，默认是ISC、有的默认是MIT
repository：项目代码存放的地方
homepage: 项目主页url，（包的官网）
config：字段用于添加命令行的环境变量。
dependencies：在生产环境中需要用到的依赖
devDependencies：在开发、测试环境中用到的依赖
bugs：填写一个bug提交地址，便于用户反馈
*/