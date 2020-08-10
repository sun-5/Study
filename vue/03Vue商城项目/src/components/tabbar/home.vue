<template>
<div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <!-- 在组建中使用V-for循环一定要绑定key -->
        <mt-swipe-item v-for='item in lunboList' :key='item.id'>
            <img :src="item.img" alt="">
        </mt-swipe-item>
        
    </mt-swipe>
    <h3>
        home
    </h3>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                lunboList:[] //保存轮播图数据
            }
        },
        created(){
            this.getLunbo()
        },
        methods:{
            getLunbo(){ //获取轮播图数据
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
                    // console.log(res.body)
                    if(res.body.status === 0){
                        //成功
                        this.lunboList = res.body.message
                        Toast('加载轮播图ok')
                        console.log(this.lunboList)
                    }else{
                        //失败
                        Toast('加载轮播图失败')
                    }
                }) 
            }
        }
    }
</script>

<style scoped lang='scss'>
    .mint-swipe{
        height:200px;
        
        .mint-swipe-item{
          &:nth-child(1){
            background-color:rgb(78, 110, 250);
          } 
          &:nth-child(2){
            background-color:rgb(199, 202, 0);
          } 
          &:nth-child(3){
            background-color:rgb(201, 38, 38);
          } 
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>