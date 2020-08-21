<!-- 商品数量加减盒 -->
<template>
  <div class='num-box'>
    <!-- 我们不知道什么时候能拿到max，但是总归有一刻会得到一个真正的max -->
    <!-- 用watch属性监听父组建传递过来的max值，不管max会被触发几次，但是最后一次肯定是一个合法的max数值 -->
    <div class="mui-numbox" data-numbox-min="1" style="height:30px">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change='countChanged' ref='numbox'/>
      <button class="mui-btn mui-btn-numbox-plus" type="button" disabled>+</button>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import mui from '../../lib/mui/js/mui.js'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props:['max','initcount','goodsId'],
  watch:{
    //属性监听
    'max':function(newVal,oldVal){
      //使用 JS API 设置 number 的最大值
       mui('.mui-numbox').numbox().setOption('max',newVal)
    }
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
 
 
  //方法集合
  methods: {
    countChanged(){
      //数量改变了
      console.log(this.$refs.numbox.value)
      // 把最新数量值，更新到 store 中
      this.$store.commit('updateGoodsInfo',{
        id:this.goodsId,
        count:this.$refs.numbox.value
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      
    mui('.mui-numbox').numbox()
  },
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
.num-box{
  display: inline-block;
}
</style>