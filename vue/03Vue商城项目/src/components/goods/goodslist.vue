<!-- 商品列表页面 -->
<template>
  <div class="goods-list">
    <!-- 老的方式 路由跳转链接 -->
    <!-- <router-link tag="div" :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodslist" :key="item.id" >
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link> -->
    <!-- 网页中跳转：1.a标签跳转 2.window.location.href 编程式跳转 -->
<!-- 新的方式跳转  -->
   <div @click='goDetail(item.id)' class="goods-item" v-for="item in goodslist" :key="item.id" >
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      pageindex: 1, //分页
      goodslist: [], //存放商品列表的数组
    };
  },
  methods: {
    getGoodsList() {
      this.$http.get("api/getgoods?pageindex=" + this.pageindex).then((res) => {
        if (res.body.status == 0) {
          // this.goodslist = res.body.message
          this.goodslist = this.goodslist.concat(res.body.message);
        }
      });
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id){
      //使用js进行跳转详情页

      //注意：一定要区分this.$route 和 this.$router 两个对象
      //其中：this.$route 是路由【参数对象】，所有路由中的参数，params  query 都属于它
      //其中：this.$router 是路由【导航对象】，用它 可以使用js 代码实现路由的前进 后退 跳转到新的url地址
     
     //1.最简单的跳转
    //  this.$router.push('/home/goodsinfo/'+id);
    //2.传递对象
    // this.$router.push({path:'/home/goodsinfo/'+id});
   //3.传递命名的路由
      this.$router.push({name:'goodsinfo',params:{id:id}});
    //4.带查询参数，/register？plan=private  
    //this.$router.push({path:'register',query:{plan:'private'}});

    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getGoodsList();
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
<style lang='scss' scoped>
//@import url(); 引入公共css类
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 277px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background: #eee;

      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
</style>