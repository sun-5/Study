/*
    类与继承
*/
/*function Animal(name){
    this.name = name
}
Animal.prototype.showName = function(){
    console.log(this.name)
}
var a = new Animal('Tom');
a.showName();
var a1 = new Animal('Jerry')
a1.showName();*/
//-----------------------------------------
 class Animal{
     //静态方法 只能通过类名调用，不可以使用实例对象调用
     static showInfo(){
         console.log('hi')
     }
    //构造函数 
    constructor(name){
        this.name = name
     }
     showName(){
        console.log(this.name) 
     }
 }
 let a = new Animal('spike')
 a.showName();
//  a.showInfo()
Animal.showInfo()
//------------------------------------
//类的继承 extends
class Dog extends Animal{
    constructor(name,color){
        super(name);//super调用父类 super 作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次 super() 函数。
        //注意：作为函数时，super() 只能用在子类的构造函数之中，用在其他地方就会报错。
        this.color = color;
    }
    showColor(){
        console.log(this.color)
    }
}
let d = new Dog('doudou','red')
d.showName()
d.showColor()
Dog.showInfo()