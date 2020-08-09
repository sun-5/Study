//1.导入vue-router包
import VueRouter from 'vue-router'
//在webpack中使用Vue
import Vue from 'vue'  

//2.手动安装VueRouter
Vue.use(VueRouter)

//导入account组件、goodslist组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//导入account子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'



//3.创建路由对象
var router = new VueRouter({
    routes:[
        //account goodslist
        {
          path:'/account',
          component:account,
          children:[
                 {path:'login',component:login},
                 {path:'register',component:register}
             ]
        },
        {path:'/goodslist',component:goodslist},
    ]
})

// 导出路由对象模块
export default router 