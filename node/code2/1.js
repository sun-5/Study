/*
    buffer的基本操作
    buffer本质上就是字节数组
    1.构造方法（类）
    2.静态方法
    3.实例方法
*/
// let buf = new Buffer(5);  转为16进制//new 版本不支持 不推荐
let buf = Buffer.alloc(5)
console.log(buf);  

let cf = Buffer.from('hello');
console.log(cf);

let df = Buffer.from([0x61,0x75,0x66,0x66,0x65,0x72]); //affur 字符
console.log(df.toString())

//静态方法
//检测是否为有效的编码参数，返回true 或 false。
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('gbk'));

let auf = Buffer.from('中国','ascii');
// console.log(Buffer.byteLength(auf)); 
// console.log(auf.toString()) //乱码

// let a1 = Buffer.alloc(3);
// let a2 = Buffer.alloc(5)
// let a3 = Buffer.contact([a1,a2]);
// console.log(Buffer.byteLength(a3));

let a1 = Buffer.from('tom');
let a2 = Buffer.from('jerry')
 let a3 = Buffer.concat([a1,a2]);  // 拼接
// console.log(Buffer.byteLength(a3));  字符长度
console.log(a3.toString());  //转为字符串

// ------------------------------------------

//实例方法
let b = Buffer.alloc(5);
b.write('hello',2,2); //从第2个结束位置开始写入2个字节  
console.log(b)

let c = Buffer.from('hello')
let c1 = c.slice(2); //从第2个结束位置开始截取
console.log(c==c1)
console.log(c1.toString())  //把buffer对象转为字符串

//toJson方法不需要显式调用，当JSON.stringify。。。会自动调用
// const d = Buffer.from([0x1,0x2,0x3,0x4,0x5])
const d = Buffer.from('hello') 
const json = JSON.stringify(d); //转为10进制
console.log(json)


