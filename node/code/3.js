// 数组的解构赋值
// let [a,b,c] = [1,2,3];
// let [a,b,c] = [,123,];
// let [a=111,b,c] = [,123,];
// console.log(a,b,c);

// 对象的结构赋值
let{asd,gas} = {asd:'ni',gas:'hao'}

let {foo:abc,bar} = {bar:'hi',foo:'nihao'}
// console.log(foo,bar); 对象有属性别名 原来的名字就无效了
console.log(abc,bar);
// 对象的解构赋值指定默认值
let {fo:efg='hello',ba} = {ba:'hi'}
console.log(efg,ba);

// 字符串的解构赋值
let [a,b,c,d,e] = 'hello';
console.log(a,b,c,d,e);
let {length} = 'hi';
console.log(length);
