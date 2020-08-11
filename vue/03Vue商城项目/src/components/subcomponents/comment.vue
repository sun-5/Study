<!--  评论组件-->
<template>
  <div class='cmt-container'>
      <h3>发表评论</h3>
      <hr>
    <textarea placeholder="请输入要BB的内容（最多120字）" maxlength='120'></textarea>
    <mt-button type='primary' size='large'>发表评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for='(item,i) in comments' :key='item.add_time'>
            <div class="cmt-title">
                第{{i + 1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dataFormat}}
            </div>
            <div class="cmt-body">
               {{item.content ==='undefined'?'此用户很懒，什么都没说':item.content}}
            </div>
        </div>
    </div>
    <mt-button type='danger' size='large' plain>加载更多</mt-button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {Toast} from 'mint-ui';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
        pageIndex:1,//默认展示第一页数据
        comments:[]
    };
  },
  props:   ['id'] ,//父组件传值的id
  methods: {
      getComments(){
          this.$http.get('api/getcomments/'+ this.id +'?pageindex=' + this.pageIndex).then(res=>{
              if(res.body.status===0){
                  //成功
             
                this.comments = res.body.message
              }else{
                  //失败
                  Toast('获取评论失败！')
              }
          })
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
      this.getComments()
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
.cmt-container{
    h3{font-size:18px}
    textarea{font-size:14px;height: 85px;margin:0}
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size:13px;
        .cmt-title{
            line-height: 30px;
            background: #ccc;
        }
        .cmt-body{
            line-height: 35px;
            text-indent: 2em;
        }
        }
    }
}
</style>