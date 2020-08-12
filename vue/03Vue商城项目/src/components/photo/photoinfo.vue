<!-- 图片详情页 -->
<template>
<div class='photo-container'>
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
        <span>发表时间：{{photoinfo.add_time|dataFormat}}</span>
        <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr>

    <!-- 缩略图浏览区域 -->
    <!-- <img class="preview-img" v-for=" (item,index) in list " :src="item.src" alt="" @click="$preview.open(index,list)" :key='item.src' height="100"> -->
    <div class="thumbs">
        <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>
     
    <!-- 图片内容区域 -->
    <div class="content" v-html='photoinfo.content'></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id='id'></cmt-box>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import 《组件名称》 from '《组件路径》';

//导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    'cmt-box':comment//注册评论子组件
},
data() {
 return {
        id:this.$route.params.id, //从路由中获取到获取图片id
        photoinfo:{},//图片详情
        list:[] //缩略图数组
  };
},
methods: {
    handleClose () {
         
      },
    getPhotoInfo(){
        this.$http.get('api/getimageInfo/'+this.id).then(res=>{
            if(res.body.status==0){
                this.photoinfo = res.body.message[0]
            }
        })
    },
    getImageList(){
         this.$http.get('api/getthumimages/'+this.id).then(res=>{
            if(res.body.status==0){
                //循环每个数据，补全图片的宽高属性
                res.body.message.forEach(item => {
                    item.w = 600
                    item.h = 400
                    item.msrc = item.src
                     item.src = item.src
                });
                //把完整的数据保存到list中
                this.list =   res.body.message
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    //获取图片详情
    this.getPhotoInfo(),
    this.getImageList()
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
<style lang='scss' >
//@import url(); 引入公共css类
.photo-container{
    padding: 3px;
    h3{
        color: #3f51b5;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size:13px;
    }
    .content{
        font-size:13px;
        line-height: 30px;
    }
   
  .thumbs {
     .my-gallery {
      display: flex;
      flex-wrap: wrap; //默认换行
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
          box-shadow: 0 0 8px #999;
          border-radius: 5px;
        }
      }
    }
  }
 

}
</style>