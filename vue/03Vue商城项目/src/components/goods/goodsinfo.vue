<!-- 商品详情页 -->
<template>
  <div class="goodsinfo-container">
    <transition 
    @before-enter='beforeEnter' 
    @enter='enter' 
    @after-enter='afterEnter'> 
    <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
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
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <!--内容区-->
      <div class="mui-card-content">
        <p class="price">
          市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.sell_price}}</span>
        </p>
        <p>购买数量：<numbox @getcount='getSelectCount' :max='goodsinfo.stock_quantity'></numbox></p>
        <p>
          <mt-button type='primary' size='small'>立即购买</mt-button>
           <mt-button type='danger' size='small' @click='addShopCar'>加入购物车</mt-button>
        </p>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">商品参数</div>
      <!--内容区-->
      <div class="mui-card-content">
        <p>商品货号：{{goodsinfo.goods_no}}</p>
        <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
        <p>上架时间：{{goodsinfo.add_time|dataFormat}}</p>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <mt-button type='primary' size='large' plain @click="goDesc(id)">图文介绍</mt-button>
        
         <mt-button type='danger' size='large' plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div> 
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import 《组件名称》 from '《组件路径》';
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {swiper,numbox},
  data() {
    return {
      id:this.$route.params.id,//将路由参数对象中的id挂载到data上
      lunbolist:[],
      goodsinfo:{} ,//获取到的商品信息
      ballFlag:false, //控制小球隐藏和显示的标识符
      selectrdCount:1 //保存用户选中的商品数量
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
    },
    getGoodsInfo(){
      //获取商品的信息
      this.$http.get('api/goods/getinfo/'+this.id).then(res=>{
        if(res.body.status==0){
          this.goodsinfo = res.body.message[0]
        }
      })
    },
    goDesc(id){
      //点击使用编程式导航，跳转到图文介绍页面
    this.$router.push({name:'goodsdesc',params:{id}})
    },
    goComment(id){
      this.$router.push({name:'goodscomment',params:{id}})
    },
    addShopCar(){
      //添加到购物车
      this.ballFlag=!this.ballFlag;
      var goodsinfo = { //拼接出一个要保存到store中car数组里的 商品信息对象
        id:this.id,
        count:this.selectrdCount,
        price:this.goodsinfo.sell_price,
        selected:true
        }
        //调用store中的mutations来将商品信息加入购物车
        this.$store.commit('addToCar',goodsinfo)
    },
    beforeEnter(el){
      el.style.transform = 'translate(0,0)'
    },
    enter(el,done){
     //获取小球位置
     const ballPosition = this.$refs.ball.getBoundingClientRect()
     //获取徽标位置
     const badgePosition = document.getElementById('badge').getBoundingClientRect()
    const xDist = badgePosition.left - ballPosition.left
    const yDist = badgePosition.top - ballPosition.top

      el.offsetWidth;
      el.style.transform = `translate(${xDist}px,${yDist}px)`
      el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)'
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    },
    getSelectCount(count){
      // 当子组件把 选中的数量 传递给父组建的时候，把选中的值保存到data上
      this.selectrdCount = count
      console.log(this.selectrdCount)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getLunbo()
    this.getGoodsInfo()
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
  .mui-card-header{
    font-size: 18px;
  }
  .mui-card-content{
    padding:10px 15px;
     .price {
    font-size: 16px;
    color: #000;
      .now_price {
    color: red;
  }
  }
  }
.mui-card-footer{
  display: block;
  button{
    margin: 15px 0;
  }
} 
.ball{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: red;
  position: absolute;
  z-index: 99;
  top: 367px;
  left: 140px;
}

}
.mint-swipe{
  width: auto;
  height: 100%;
}
</style>