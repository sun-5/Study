// main.js 是我们项目的js入口文件
 
import Vue from 'vue'

// 导入MUI样式
import './lib/mui/css/mui.min.css'   

import 'mint-ui/lib/style.css'    

//按需导入Mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)



// 导入app组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})