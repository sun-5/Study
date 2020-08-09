<template>
    <div>
        <h1>这是account组件</h1>

        <router-link to='/account/login'>登录</router-link>
        <router-link to='/account/register'>注册</router-link>

        <router-view></router-view>

    </div>
</template>
<style lang='scss' scoped>
/* 普通的style 只支持普通的样式，如果想要启动scss或者less 需要为style设置lang属性 */
//只要style标签是在 .vue组件中定义的，推荐都为style开启scoped属性

body{
    div{
      font-style: italic;  
    }
}
</style>

 

