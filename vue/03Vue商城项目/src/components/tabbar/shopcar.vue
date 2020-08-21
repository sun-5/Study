<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="item in goodslist" :key='item.id'>
        <div class="mui-card-content">
            <mt-switch ></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
                <h1>{{item.title}}</h1>
                <p>
                    <span class="price">￥{{item.sell_price}}</span>
                    <numbox :initcount='$store.getters.getGoodsCount[item.id]' :goodsId='item.id'></numbox>
                    <!-- 问题：如何从购物车种获取商品的数量 -->
                    <!-- 1.我们可以创建一个空对象，然后循环购物车中所有商品数据，把当前循环这条商品的ID，作为对象的属性名，
                    count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象：{88:2,89:1,90:4} -->
                    <a href="">删除 </a>
                </p>
            </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">内容区</div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    components:{
        numbox
    },
    data(){
      return {
        goodslist:[]//购物车中所有商品数据
      }
    },
    created(){
      this.getGoodsList()
    },
    methods:{
      getGoodsList(){
        //1.获取到store中所有商品的id，然后拼接出一个用逗号分隔的字符串
        var idArr=[]
        this.$store.state.car.forEach(item => idArr.push(item.id));
        if(idArr.length<=0){
          return  //如果购物车没有商品，则不需要请求数据接口，否则报错
        }
        //获取购物车商品列表
        this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(res=>{
          if(res.body.status==0){
            this.goodslist = res.body.message
          }
        })
      }
    }
}
</script>

<style scoped lang='scss'>
.shopcar-container{
    background-color:#eee ;
    overflow: hidden;
    .mui-card-content{
      display: flex;
      align-items: center;
    }
    .mui-card{padding:10px}
    img{
      width:60px;
      height: 60px;
    }
    h1{font-size: 14px;}
    .info{
      .price{color:red;font-weight:bold}
    }
}
</style>