// main.js 是我们项目的js入口文件
 
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)


//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

// 导入MUI样式
import './lib/mui/css/mui.min.css'   
import './lib/mui/css/mui-icons-extra.css' 

import 'mint-ui/lib/style.css'    

//按需导入Mint-UI中的组件
import {Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//1.3导入自己的router.js路由模块
import router from './router.js'

// 导入app组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router //1.4挂载路由对象到vm实例
})

