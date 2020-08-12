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
          <a :class="['mui-control-item',item.id ==0?'mui-active':'']" v-for="item in cates"
            :key="item.id"  @click='getPhotoListByCateid(item.id)'>{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link tag='li' :to="'/home/photoinfo/'+item.id" v-for="item in list" :key='item.id'>
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body" >{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

//1.导入mui的js
import mui from "../../lib/mui/js/mui.js";
export default {
  name: "",
  data() {
    return {
      cates: [], //图片所有分类的数组
      list:[] //图片列表的数组
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getAllCategory();
    //默认进入页面，主动请求 所有图片列表的数据
    this.getPhotoListByCateid(0);
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //2.初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      //获取所有图片分类
      this.$http.get("api/getimgcategory").then((res) => {
        if (res.body.status == 0) {
          //手动拼接处一个最完整的 分类列表
          res.body.message.unshift({ title: "全部", id: 0 });
          this.cates = res.body.message;
        }
      });
    },
    getPhotoListByCateid(cateid) {
      //根据分类id 获取图片列表
      this.$http.get("api/getimages/" + cateid).then((res) => {
        if (res.body.status == 0) {
          this.list = res.body.message;
        }
      });
    },
  },
};
</script>
<style lang='scss'>
/* @import url(); 引入css类 */
.photo-list{
  list-style: none;
  padding:0 10px;
  margin: 0;
  padding-bottom: 0;
  li{
    background: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
    img[lazy=loading] {//图片懒加载样式
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color: #fff;
      text-align: left;
      background: rgba(0,0,0,0.4);
      position:absolute;
      bottom: 0;
      left: 0;
      padding: 5px;
      max-height: 90px;
      .info-title{
        font-size: 14px;
      }
      .info-body{
        font-size:13px;
      }
    }
  }
}


</style>