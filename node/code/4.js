/*
    字符串相关扩展
    includes()  判断字符串中是否包含指定的字符串（有返回true，否则返回fals）
                参数一：匹配的字符串；
                参数二：从第几个开始匹配

    startWith() 判断字符串是否以特定的字符串开始

    endsWith()  判断字符串是否以特定的字符串结束
*/
console.log('hello world'.includes('world',7));

let url = 'admin/index.php';
console.log(url.startsWith('admin'));

console.log(url.endsWith('php'));

//模板字符串
// 反引号表示模板，模板中的内容可以有格式，通过 ${} 方式填充数据
let obj = {
    username:'wubo',
    age:20,
    sex:'male'
}
let fn = function(info){
    return info;
}
let tpl = `
    <div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.sex}</span>
        <span>${fn('nihao')}</span>
    </div>

`
console.log(tpl)


