// main.js 是我们项目的js入口文件
 
//在webpack中使用Vue
import Vue from 'vue'  
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)


//导入 app 组件
import app from './APP.vue'

//导入account组件、goodslist组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//3.创建路由对象
var router = new VueRouter({
    routes:[
        //account goodslist
        {path:'/account',component:account},
        {path:'/goodslist',component:goodslist},
    ]
})

var vm = new Vue({
    el:'#app' ,
    render:c=>c(app), //导出组件到页面
    //render 会把el 指定的容器中，所有内容都清空，
    //所以不要把路由的 router-view 和 router-link 直接写到el控制的元素中
    router  //4.路由对象挂载到vm实例上
}) 