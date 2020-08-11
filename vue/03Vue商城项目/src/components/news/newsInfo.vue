<template>
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsInfo.title}}</h3>
   <!-- 子标题 -->
   <p class="subtitle">
       <span>发表时间：{{newsInfo.add_time|dataFormat}}</span>
       <span>点击：{{newsInfo.click}}次</span>
   </p>
   <hr>
   <!-- 内容区 -->
   <div class='content' v-html="newsInfo.content">

   </div>
   <!-- 评论区子组件 -->
   <comment-box :id='this.id'>  </comment-box>
</div>

</template>

<script>
//1.导入评论子组件
import comment from '../subcomponents/comment.vue'

import {Toast} from 'mint-ui'
export default {
    components:{
        //2.注册子组件
        'comment-box':comment
    },
    data(){
        return{
            id:this.$route.params.id, //将地址中传递过来的ID值挂载到data上，方便调用
            newsInfo:{}//新闻对象
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/' + this.id).then(res=>{
                if(res.body.status===0){
                    this.newsInfo = res.body.message[0]
                }else{
                    Toast('获取新闻详情失败！')
                }
            }) 
        }
    }
 
}
</script>

<style lang="scss">
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:rgb(26, 26, 26)
    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        color: #2196f3;
    }
    .content{
        img{
            width:100%;
        }
    }


}

</style>