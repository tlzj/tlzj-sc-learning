// 接口
// const getUserInfo = (user: { name: string, age: number}): string => {
//   return `name: ${user.name} age: ${user.age}`;
// }
// getUserInfo({ name: 'zs', age: 18 });
// const userFun = ():{name: string, age: number} => {
//   return { name: 'zs', age: 18 };
// }
// getUserInfo(userFun());

// 定义对象
// interface IObj {
//   name: string, 
//   age: number,
//   sayHi():void,
//   sayHello?(name: string):string,
//   sayYes: (name: string) => string,
//   [props:string]:any
// }
// let obj1: IObj = {
//   name: 'zs',
//   age: 18,
//   sayHi: function(){

//   },
//   sayYes: function(name: string):string{
//     return this.name;
//   },
//   isFlag: true,
//   other: undefined
// }
// let fun = obj1.sayYes('xiao hong');
// obj1.sayHello && obj1.sayHello('xiao zhang'); // 对于可选方法的调用，要先判断，否则会报错

// 定义函数
// interface IFunc {
//   (x: number, y: number, desc?:string):void
// }
// // 或者定义如下
// type Func = (x: number, y: number, desc?: string) => void;
// const sum: IFunc = function(x,y,desc){
//   console.log(desc, x + y);
// }

// 接口实现（类）
// interface Entity {
//   title: string,
//   name: string,
//   log():void
// }
// class Post implements Entity{
//   title: string;
//   constructor(title: string, public name: string){
//     this.title = title;
//     this.name = name
//   }
//   log():void {
//     console.log(this.title);
//   }
// }

// 接口的继承
interface Shape {
  color: string;
  syHi?(name:string):void;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number
}
let obj: Square = {
  color: 'skyblue',
  penWidth: 20,
  sideLength: 100,
}
class AClass implements Square {
  constructor(public color: string, public penWidth: number,  public sideLength: number, public gender: string){
    this.color = color;
    this.penWidth = penWidth;
    this.sideLength = sideLength;
    this.gender = gender;
  }
  syHi(name: string){

  }
}


