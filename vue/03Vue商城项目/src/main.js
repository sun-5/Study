// main.js 是我们项目的js入口文件
 
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进入网站，肯定会调用 main.js  在刚调用时候，先从本地存储中，把购物车的数据读出来，放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state:{ //this.$store.state.xxx
    car:car//将购物车中商品的数据，用一个数组存储，在car数组中，存储一些商品的对象
          //{id:商品id,count:要购买的数量,price:商品的单价,selected:false}
  },
  mutations:{ //this.$store.commit('方法名',按需传递唯一参数)
    addToCar(state,goodsinfo){
      //点击加入购物车，把商品信息，保存到store中的car上
      //分析：1.如果购物车中，之前已经有这个商品，只需要更新数量
      // 2.如果没有，则直接把商品数据，push到car 数组中
      var flag = false //假设没有找到一样的商品
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag =true
          return true
        }
      })
      //如果循环完毕，flag还是false则把商品对象信息push到数组中
      if(!flag){
        state.car.push(goodsinfo)
      }

      //当更新car数组之后，把car 存储到本地 localStorage 中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsInfo(state,goodsinfo){
      //修改购物车中商品的数量值
      //分析：
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      //当修改完商品数量，把最新购物车数据，保存到 本地存储中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFromCar(state,id){
      //根据ID从store中的购物车中删除对应的商品数据
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
          return true
        }
      })
      //将删除完毕，最新的购物车数据，保存到本地存储中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsSelected(state,info){
      state.car.some(item=>{
        if(item.id == info.id){
          item.selected = info.selected
        }
      })
      //把 购物车商品的最新状态保存到 本地
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{//this.$store.getters.xxx
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c += item.count
      })
      return c
    },
    getGoodsCount(state){
    var o = {}
    state.car.forEach(item=>{
      o[item.id] = item.count
    })
    return o
  },
    getGoodsSelected(state){
    var o ={}
    state.car.forEach(item=>{
      o[item.id] = item.selected
    })
    return o
    },
    getGoodsCountAndAmount(state){
      var o ={
        count:0,
        amount:0
      }
      state.car.forEach(item=>{
        if(item.selected){
          o.count += item.count
          o.amount += item.price + item.count
        }
      })
      return o
    }
  }
})



//导入格式化时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
  return  moment(dataStr).format(pattern)
})

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
//设置全局 post时候表单数据格式组织形式
Vue.http.options.emulateJSON = true

// 导入MUI样式  
import './lib/mui/css/mui.min.css'   
import './lib/mui/css/mui-icons-extra.css' 


//导入mint-ui样式
import 'mint-ui/lib/style.css'  
 
//按需导入Mint-UI中的组件
// import {Header, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui' 
Vue.use(MintUI)

//图片懒加载需要导入所有mint-ui才会显示

//1.3导入自己的router.js路由模块
import router from './router.js'

// 导入app组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router, //1.4挂载路由对象到vm实例
    store//挂载sotre 状态管理对象
})



