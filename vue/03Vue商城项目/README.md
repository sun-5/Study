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