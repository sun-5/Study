<template>
    <div>
      <ul class="mui-table-view">
    <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                <h1>{{item.title}}</h1>
                <p class='mui-ellipsis'> 
                <span>发表时间：{{item.add_time}}</span>
                <span>点击：{{item.click}}次</span>
                </p>
            </div>
        </a>
    </li>
    
</ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return{
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            //获取新闻列表
        this.$http.get("api/getnewsList")
            .then((res) => {
            // console.log(res.body)
            if (res.body.status === 0) {
                //成功
                this.newsList = res.body.message;
                Toast("新闻列表已加载！");
                console.log(this.newsList);
            } else {
                //失败
                Toast("加载新闻列表失败！");
            }
                });
        }
    }
}


</script>


<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
           
        }
         .mui-ellipsis{
                font-size: 12px;
                color: #2196f3;
                display: flex;
                justify-content: space-between;
            }
    }
}
</style>