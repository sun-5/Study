<!-- 商品详情页 -->
<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <!--内容区-->
      <div class="mui-card-content">
         <!-- 轮播图  改造为轮播图组件-->
     <swiper :lunbolist="lunbolist" :isfull='false'></swiper>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">页眉</div>
      <!--内容区-->
      <div class="mui-card-content">内容区</div>
      <!--页脚，放置补充信息或支持的操作-->
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">页眉</div>
      <!--内容区-->
      <div class="mui-card-content">内容区</div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import 《组件名称》 from '《组件路径》';
import swiper from '../subcomponents/swiper.vue'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {swiper},
  data() {
    return {
      id:this.$route.params.id,//将路由参数对象中的id挂载到data上
      lunbolist:[]
    };
  },
  methods: {
     getLunbo() {
      //获取轮播图数据
      this.$http
        .get("api/getthumimages/" +this.id)
        .then((res) => {
          if (res.body.status === 0) {
            //先循环出轮播图数组每一项，为item添加img属性，因为 轮播图组件中，只认识item.img，不认识item.src
           res.body.message.forEach(t=>{
              t.img = t.src
           })
           this.lunbolist = res.body.message;
          }  
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getLunbo()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' >
//@import url(); 引入公共css类
.goodsinfo-container {
  background: #eee;
  overflow: hidden;
}
.mint-swipe{
  width: auto;
  height: 100%;
}
</style>