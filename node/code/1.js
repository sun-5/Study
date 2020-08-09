var hel = 'hello world!';

// exports.hel = hel ; 输出模块

 module.exports = hel + '2';

 /*
    函数的扩展
    1.参数的默认值
    2.参数解构赋值
    3.rest参数
    4....扩展预算符
 */
function foo(param = 'nihao'){  //参数直接等于一个值 设置为参数的默认值
    console.log(param)
}
foo('hello')

function test(name='lisi',age=12){
    console.log(name,age)
}
test('zs',18)
// ------------------------------------
//参数解构赋值
function tee({name='lisi',age=12}={}){
    console.log(name,age)
}
tee({name:'wubo',age:25}); 

// ————————————————————————————————
// rest参数-剩余参数
function aaa(a,b,...para){
    console.log(a)
    console.log(b)
    console.log(para)
}
aaa(1,2,3,4,5)
// ————————————————————————————————————
// 扩展运算符...
function bbb(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f)
}
// bbb(1,2,3,4,5)
let arr = [1,2,3,4,5,6];
// bbb.apply(null,arr)
bbb(...arr)

// 合并数组
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3)