#  Vue 商城项目
##  制作首页App组件
1. 完成Header区域，使用的是Mint-UI中的Header组件
2. 制作底部的Tabbar区域，使用的 MUI 的 Tabbar.html
 + 制作 购物车 小图标时候，操作较多：
 + 扩展图标的css样式拷贝到项目中，导入css
 + 拷贝扩展字体库 ttf文件到项目中
 + 为购物车图标 添加特有类名
3. 在中间区域放置一个 router-view 来展示路由匹配到的组件

##  改造TabBar为路由 router-link

##  设置路由高亮

##  点击 TabBar 中路由连接，展示对应路由组件

##  制作首页轮播图布局

##  加载首页轮播图数据
1.  获取数据，如何获取，使用vue-resource
2.  使用vue-resource的this.$http.get获取数据
3.  获取到的数据，保存到data身上
4.  使用v-for 循环渲染每个item项

##  九宫格布局改造

##  组件切换动画效果
1.  取消滚动条bug,header tabbar 位移
2.  从右往左退出
3.  取消下个页面组件顶上去的bug

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作
1. 绘制界面 news.vue，使用MUI中的media-list
2. 使用 vue-resource 获取数据
3. 渲染真实数据，过滤器修改时间格式

## 实现 新闻资讯列表 点击跳转新闻详情
1. 把列表中每一项改为router-link，同时，在跳转时应提供唯一的id标识符
2. 创建新闻详情页组件页面 newsInfo.vue
3. 在路由模块，将新闻详情的 路由地址 和 组件页面对应起来


## 实现 新闻详情 的 页面布局 和 数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中，先收容导入 comment组件
 + import comment from './comment.vue'
3. 在父组件中，使用components属性，将方才导入的组件，注册为自己的子组件
4. 将注册子组件时候的 注册名称，以标签形式，在页面中 引用

## 获取所有评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++，然后重新调用this.getComments()方法，重新获取最新一页数据
3. 为了防止新数据 覆盖老数据的情况，每当获取到新数据，应该 老数据 调用 数组的concat方法，拼接上新数组

##  发表评论功能
1. 把文本框做双向数据绑定
2. 为发表按钮绑定事件
3. 点击按钮，先判断是否输入内容，无内容则Toast提示
4. 通过vue-resource发送一个请求，把评论内容发送给服务器
5. 当发表评论ok后，重新刷新列表，以查看最新的评论
 + 如果调用getComments方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到。
 +  换一种思路:当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后 调用 数组的 unshift方法，把最新的评论，追加到 data 中comments的开头
 
## 改造图片分享 按钮 为路由的链接，并显示对应组件页面

## 绘制 图片列表 组件页面 并美化样式
1. 顶部滑动导航条制作
2. 制作图片列表
### 制作顶部滑动导航条注意事项
1. 需要借助 MUI 中的 tab-top-webview-main.html
2. 需要把slider 区域的 mui-fullscreen类 去掉
3. 滑动条无法正常滑动，通过检查官方文档，这是js组件，需要被初始化一下
 + 导入mui.js
 + 调用官方提供的 方式 去初始化
4. 导入的mui.js,报错，webpack打包的bundle.js，默认是启动严格木事，所有可能冲突
+ 解决方案：1.把mui.js中的 非严格模式的代码改掉，不显示
+ 方案2：把webpack打包时候的严格模式禁用，使用插件 babel-plugin-transform-remove-strict-mode
5. 由于目标被视为被动，无法防止被动事件侦听器中的默认：在style全局样式添加* {touch-action: pan-y;初始化mui代码放置于mounted生命周期函数中
### tabbar组件无法正常切换
1. mui.js 和 tabbar 的 样式类 mui-tab-item 冲突
2. 把所有与 mui-tab-item  相关的样式，重新在App.vue中定义