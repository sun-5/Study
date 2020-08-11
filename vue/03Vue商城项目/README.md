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

