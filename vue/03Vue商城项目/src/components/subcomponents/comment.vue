<!--  评论组件-->
<template>
  <div class='cmt-container'>
      <h3>发表评论</h3>
      <hr>
    <textarea v-model='msg'placeholder="请输入要BB的内容（最多120字）" maxlength='120'></textarea>
    <mt-button type='primary' size='large' @click="postComment">发表评论</mt-button>
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
    <mt-button type='danger' size='large' plain @click='getmore'>加载更多</mt-button>
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
        comments:[],
        msg:''//评论输入内容
    };
  },
  props:   ['id'] ,//父组件传值的id
  methods: {
      getComments(){
          this.$http.get('api/getcomments/'+ this.id +'?pageindex=' + this.pageIndex).then(res=>{
              if(res.body.status===0){
                  //成功
                // this.comments = res.body.message
                //每当获取新评论数据的时候，不要把咯啊数据清空覆盖，而是应该以老数据，拼接新数据
                this.comments =  this.comments.concat(res.body.message)

              }else{
                  //失败
                  Toast('获取评论失败！')
              }
          })
      },
      getmore(){//加载更多
          this.pageIndex++;
          this.getComments()
      },
      postComment(){ //发表评论
        //校验是否为空内容
        if(this.msg.trim().length===0){
         return Toast('评论内容不能为空！')
        }

      
      //参数1: 请求的url地址
      //参数2：提交给服务器的数据对象{content：this.msg}
      //参数3：定义提交时候，表单数据的格式{enulateJSON:true}
        this.$http.post('api/postcomment/'+ this.id,{
            content:this.msg.trim()
            }).then(res=>{
                if(res.body.status===0){
                    //1.拼接一个评论对象
                    var cmt = {
                        user_name:'阿浪',
                        add_time:Date.now(),
                        content:this.msg.trim()
                    }
                    this.comments.unshift(cmt)
                    this.msg = ''
                }else{
                    Toast('发表评论失败！')
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