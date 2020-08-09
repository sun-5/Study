// node 中向外暴露成员的方式
// module.exports = {}

//在ES6中，通过规范的形式，规定了额ES6中如何 导入 和 导出 模块
//ES6中导入模块 使用 1. import 【模块名称】 from '模块标识符'   2. import '路径'

//ES6中，使用 export default{}和 export 向外暴露成员，导出

export default{ 
    name:'zs',
    age:15
}
//注意：在一个模块中，export default  只允许向外暴露一次，可用 任意变量名称 接收
//注意：在一个模块中，可以同时使用 export default  和 export 向外暴露成员
//注意：在一个模块中，export 可以向外暴露多个成员，同时，如果某些成员，我们在import时候不需要，则可以不在{ }中定义
export var title = '小星星'
export var content = '哈哈哈'
//注意：使用export导出的成员，必须使用 导出时候的名称 来接收
//使用export导出的成员，如果就想换个名称来接收，可以用 as 来起一个 别名


//【Node】中使用 var 【名称】 = require（'模块标识符'） 导入
//      module.exports = {} 和 exports 来暴露成员  导出
