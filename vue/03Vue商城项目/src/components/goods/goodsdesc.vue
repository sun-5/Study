<!-- 商品详情页面 -->
<template>
<div class='goodsdesc'>
    <h3>
        {{info.title}}
    </h3>
    <hr>
    <div class="content" v-html="info.content"></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    info:{}//图文数据
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getGoodsDesc(){
        this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(res=>{
            if(res.body.status==0){
                this.info = res.body.message[0]
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getGoodsDesc()
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
<style lang='scss'  >
//@import url(); 引入公共css类
.goodsdesc{
   
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content{
         padding:4px;
        img{
            width: 100%;
        }
    }
}
</style>