/*
    箭头函数

*/

function foo(){
    console.log('hello')
}
foo()
let fo = () =>console.log('nihao')
fo()

// 箭头函数注意事项
// 1.箭头函数中this取决于函数的定义，而不是调用
function test(){
    // console.log(this)   使用call调用函数时，这里的this是call的第一个参数 
    setTimeout(() => {
       console.log(this.num) 
       console.log(this) 
    },);
}
test.call({num:1}) 
// 2.箭头函数不能new
// let foo = () =>{this.num=123};
// new foo()
// 3.箭头函数不可以用arguments获取参数列表，可以使用rest参数代替
// let tool = (a,b)=>{
//    console.log(a,b);  
//    console.log(arguments); 无法获取实参列表  
// }
// tool(123,456)

let tool = (...param) =>{
    console.log(param) //可以获取实参列表
}
tool(123,456)