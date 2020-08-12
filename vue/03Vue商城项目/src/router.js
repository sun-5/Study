 
import VueRouter from 'vue-router'

//导入对应路由组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import news from './components/news/news.vue'
import newsInfo from './components/news/newsInfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'

 //创建路由对象
var router = new VueRouter({
    routes:[
        //路由重定向
       {path:'/',redirect:'/home'},
       {path:'/home',component:home,},
       {path:'/member',component:member},
       {path:'/shopcar',component:shopcar},
       {path:'/search',component:search},
       {path:'/home/news',component:news},
       {path:'/home/newsInfo/:id',component:newsInfo},
       {path:'/home/photolist',component:photolist},
       {path:'/home/photoinfo/:id',component:photoinfo},
       {path:'/home/goodslist',component:goodslist},
       {path:'/home/goodsinfo/:id',component:goodsinfo,name:'goodsinfo'},
    ],
    linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认：router-link-active
})

// 导出路由对象模块
export default router 