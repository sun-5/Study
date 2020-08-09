// main.js 是我们项目的js入口文件

//在普通网页中使用vue：
//1.使用script标签，引入 VUE 的包
//2.在index 页面中，创建一个id 为 app div容器
//3.通过new Vue 得到一个 vm 实例

//在webpack中使用Vue
import Vue from 'vue'  
//导入的功能不全 只提供了runtime-only 的方式，切割版的
//回顾 包的查找规则：
//1.找 项目根目录中有无 node——modules的文件夹
//2.在 node_modules中根据包名，找对应的 Vue 文件夹
//3.在 Vue 文件夹中，找一个叫做 package.json的包配置文件
//4.在  package.json文件中找main属性，指定的入口文件

//import Vue from '../node_modules/vue/dist/vue.js'

// var login = {
//     template:'<h1>这是网页形式创建的login组件</h1>'
// }

//1.导入 login 组件
import login from './login.vue'
//默认 webpack无法打包 .vue文件，需要安装loader
//cnpm i vue-loader vue-template-compiler -D
//cnpm i vue-loader-plugin -S  vue-loader 15版本之后必须增加一些配置
//配置文件中，新增loader配置 

var vm = new Vue({
    el:'#app' ,
    data:  {
        msg:'123'
    },
    // components:{
    //     login
    // }

    // render(createElements){
    //     //在webpack中想通过vue把组件放到页面中，vm实例中的render函数可以实现
    //     return createElements(login)
    // }

    render:c=>c(login) //简写
   

})


//总结：webpack中如何使用vue：
/* 
    1.安装vue包，cnpm i vue -s 生产环境
    2.由于webpack中，使用.vue组件模板文件定义组件，需要安装能解析这种文件的loader
        cnpm i vue-loader vue-template-complier -D
        cnpm i vue-loader-plugin -S  vue-loader@15版本之后必须配置依赖插件
    3.webpack.config.js中进行配置：
        const VueLoaderPlugin = require('vue-loader/lib/plugin')
         plugins:[   
            new VueLoaderPlugin()
          ],
        module:{  
         rules:[  
                 { test:/.vue$/,  use:'vue-loader'}  
             ]
         } 
    4.在main.js中导入Vue模块 import Vue from 'vue'  只提供了runtime-only 的方式
    5.定义一个.vue组件，三部分组成：template script style
    6.导入组件 import login from './login.vue'
    7.创建VM实例 var vm = new Vue({el:'#app},render:c=>c(login))
    8.在index.html页面中创建一个id为app 的div容器，作为vm实例要控制的区域
*/

import m22,{title as title123,content} from './test'
console.log(m22)
console.log(title123 + '---' + content)