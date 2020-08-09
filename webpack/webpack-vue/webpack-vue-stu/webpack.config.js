const path = require('path') //node 中语法，引入path模块，进行path相关操作
const webpack = require('webpack')// 启用热更新 第二步
// 这个webpack配置文件，就是一个js文件，通过Node中的模块操作，向外输出一个配置对象
//只要是插件，都要放到plugins中
//导入 在内存中生成HTML页面 的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
//1.自动在内存中根据指定页面生成一个内存的页面
//2.自动把打包好的bundle.js追加到内存页面中
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//vue-loader使用的相关配置

module.exports = { //node中语法 webpack通过node开发的
    //通过打包命令，可以知道，需要手动指定 入口 和 出口
    entry: path.join(__dirname,'./src/main.js'),//入口，表示，要使用 webpack 打包哪个文件
    output:{ //输出文件的 配置
        path:path.join(__dirname,'./dist'), //指定打包文件的 目录
        filename:'bundle.js' // 输出文件的 名称
    },
    mode: 'development',// 配置开发模式，mode的默认配置就是production，就是说如果你不配置mode默认值是生产模式   
    devServer:{
        open:true,//自动打开浏览器
        port:3000,//设置启动时候的运行端口
        contentBase:'src',//指定托管的根目录
        hot:true //启用热更新 第一步
    },
    plugins:[  //配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //new 一个热更新的模块对象，启用热更新第三步   
        new htmlWebpackPlugin({ //创建一个 在内存中生成HTML页面的 插件
            template:path.join(__dirname,'./src/index.html'),
            //指定模板页面将来会根据指定的页面路径 去生成内存中的页面
            filename:'index.html'//指定页面生成的名称
        }),
        new VueLoaderPlugin()

    ],
    module:{ //这个节点，用于配置 所有第三份模块 加载器
        rules:[ //所有第三方模块的 匹配规则
            { test:/.css$/,  use:['style-loader','css-loader']}, //配置.css文件第三方loader规则
            {test:/.less$/,use:['style-loader','css-loader','less-loader']},
            //配置less文件的规则
            { test:/.scss$/,  use:['style-loader','css-loader','sass-loader']},
            { test:/.vue$/,  use:'vue-loader'} //处理.vue 文件的loader
        
        ]
    },
    resolve:{
        alias:{
            //设置vue被导入包时的路径
            // 'vue$':'vue/dist/vue.js'
        }
    }
}