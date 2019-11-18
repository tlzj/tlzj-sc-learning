// 以下代码来自官方文档的示例
// -------------------- 接口 ----------------------
// (作用就是为这些类型命名和为你的代码或第三方代码定义契约。)
// function getLabel(labelObj: { label: string}): string {
//   return labelObj.label;
// }
// let obj = { size: 10, label: 'size 10'}
// let label = getLabel(obj)

// a.只读属性
// interface IPoint {
//   readonly x: number;
//   readonly y: number;
// }
// let p1: IPoint = {
//   x: 3,
//   y: 7
// }
// p1.x = 90 // 只读，赋值会出错

// TypeScript具有ReadonlyArray<T>类型
// let a: number[] = [1,3];
// let ro: ReadonlyArray<number> = a;

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let obj: SquareConfig = { colour: "red", width: 100 } as SquareConfig

// let mySquare = createSquare(obj);

// interface IObj {
//   color: string;
//   width: number;
//   [propsName: string]: any
// }

// let obj: IObj = {
//   color: 'asdjf',
//   width: 100,
//   aaa: true
// }

// 小测试
interface IPerson {
  name: string;
  age: number,
  sayHi: () => string;
  // [prop: string]: string | number | object
  [prop: string]: any
}
let p: IPerson = {
  name: 'zs',
  age: 18,
  sayHi: function() {
    return this.name
  }
}

let keyString = 'sayHi';
p[keyString].match(/s/g)  // 报错
// p.name // 不报错

interface IPerson1 {
  name: string;
  city: string;
  age: number;
  printDetails(): void;
}