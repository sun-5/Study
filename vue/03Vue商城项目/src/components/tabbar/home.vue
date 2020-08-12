<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <!-- 在组建中使用V-for循环一定要绑定key -->
      <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
      <!-- 九宫格 到 六宫格 改造 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to='/home/news'>
            <img :src="'../../images/1.png'" alt=''>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to='/home/photolist'>
            <img :src="'../../images/2.png'" alt=''>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to='/home/goodslist'>
            <img :src="'../../images/3.png'" alt=''>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to='/home/liuyan'>
             <img :src="'../../images/4.png'" alt=''>
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to='/home/vedio'>
            <img :src="'../../images/5.png'" alt=''>
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to='/home/contact'>
            <img :src="'../../images/6.png'" alt=''>
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>

      </ul>
    
     
  </div>
</template>

<script>
 
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunboList: [], //保存轮播图数据

    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    getLunbo() {
      //获取轮播图数据
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then((res) => {
          // console.log(res.body)
          if (res.body.status === 0) {
            //成功
            this.lunboList = res.body.message;
            Toast({
            message: '加载轮播图ok',
            className: 'toast',
            duration: 1000,
            iconClass: 'mint-toast-icon mintui mintui-success'
            });
            console.log(this.lunboList);
          } else {
            //失败
            Toast("加载轮播图失败");
          }
        });
    },
  },
};
</script>

<style lang='scss' >
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: rgb(78, 110, 250);
    }
    &:nth-child(2) {
      background-color: rgb(199, 202, 0);
    }
    &:nth-child(3) {
      background-color: rgb(201, 38, 38);
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9{
    background: #fff;
    border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
    img{
        width: 80px;
        height:80px;
    }
    .mui-media-body{
        font-size:14px ;
    }
}
.toast{
  top:75%!important;
}
.mintui-success{
   display: block;
   text-align: center;
   font-size: 56px;
   padding: 20px 0;
}
 
 
</style>