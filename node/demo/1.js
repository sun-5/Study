/*
开发环境（开发测试环境） 
生产环境（项目部署上线之后的服务器环境）
"dependencies": {
    "art-template": "^4.13.2"
  },
  "devDependencies": {
    "es-checker": "^1.4.2"
  },
--save 向生产环境添加依赖  dependencies
--save-dev  向开发环境添加依赖  devDependencies
添加依赖的作用
只提交有依赖的包
node_modules 不会所有的都上传

*/


console.log('nihao')
/*
  yarn 工具基本使用
  安装yarn工具 ：npm install -g yarn
  1.初始化包
  npm init
  yarn init
  2.安装包
  npm install xxx --save
  yarn add xxx
  3.移除包
  npm uninstall xxx
  yarn remove xxx
  4.更新包
  npm update xxx
  yarn upgrade xxx
  5.安装开发依赖的包
  npm install xxx --save-dev
  yarn xxx --dev
  6.全局安装
  npm install -g xxx
  yarn global add xxx
  7.设置下载镜像的地址
  npm config set registry url
  yarn config set registry url
  8.安装所有依赖
  npm install
  yarn install
  9.执行包
  npm run
  yarn run
*/
