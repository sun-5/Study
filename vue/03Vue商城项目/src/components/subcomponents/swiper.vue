<!-- 轮播图组件页面 -->
<template>
<div class=''>
      <mt-swipe :auto="4000">
      <!-- 在组建中使用V-for循环一定要绑定key -->
      <!-- 将来谁使用 这个 轮播图组件，谁传递lubolist数组 -->
      <!-- 此时，lunbolist 应该是 父组件 向子组件 传值 -->
      <mt-swipe-item v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" :class="{full:isfull}"  />
      </mt-swipe-item>
    </mt-swipe>
</div>

<!-- 分析：为什么商品详情中的轮播图 比例难看 -->
<!-- 1.首页中的图片宽和高都是100%，无问题
     2.在商品详情页中，轮播图的 图片比例和首页不一致
     3.商品详情页中的轮播图，期望高度100%，但是宽度为自适应
     4.问题原因:首页 和 商品详情页中分歧点，图片宽度 100%？ or  自适应？
     5.既然其他无冲突，可以设置 用户 手动指定 轮播图的宽度是否为100%
 -->


</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import 《组件名称》 from '《组件路径》';
export default {
props:['lunbolist','isfull'],
//import引入的组件需要注入到对象中才能使用
components: {},

methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.mint-swipe {
  height: 200px;
  text-align: center;

  img {
    // width: 100%;
    height: 100%;
  }
}
.full{
  width:100% ;
}
</style>