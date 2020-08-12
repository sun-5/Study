<!-- 图片分享列表 -->
<template>
  <div>
    <!-- 顶部滑动导航条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id ==0?'mui-active':'']" v-for="item in cates" :key='item.id'>{{item.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//1.导入mui的js
import mui from "../../lib/mui/js/mui.js"
export default {
  name: "",
  data() {
    return {
        cates:[]//图片所有分类的数组
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
      this.getAllCategory()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      //2.初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods:{
      getAllCategory(){
          //获取所有图片分类
          this.$http.get("api/getimgcategory").then(res=>{
              if(res.body.status==0){
                  //手动拼接处一个最完整的 分类列表
                  res.body.message.unshift({title:'全部',id:0})
                  this.cates = res.body.message
              }
          })
      }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>