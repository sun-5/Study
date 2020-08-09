var mod = require('./1.js');
// console.log(mod.hel);
 console.log(mod);
//  console.log(a); let不存在预编译
 let a = 123;
//  let a = 234; let声明的变量不能重复
 console.log(a)

 if(true){
    let flag = 1234;
    console.log(flag); 
 }
//  console.log(flag); let 声明的变量 块内部的变量 外部不能访问

for(let i =0;i<5;i++){
    console.log(i)
}
// console.log(i)  let声明的变量 只能在for循环内部使用
// let声明的变量只能先声明再使用

// =======================================
// const 用来声明常量 
const n = 1;
// n = 2 ; const 声明的常量不允许重新赋值
 