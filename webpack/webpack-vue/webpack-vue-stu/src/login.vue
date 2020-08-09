<template>
    <div>
            <h1 @click='show'>这是登陆组件，使用 .vue 文件定义出啦的 --- {{msg}}</h1>
    </div>
</template>

<script>
    export default{
        data(){ //组件中的data必须是function
            return {
                msg:'123'
             }
        },
        methods:{
            show(){
                console.log('调用了login.vue中的show方法')
            }
        }
    }
</script>
 <style>
 </style>