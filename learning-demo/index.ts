// let num:number = 1234;
// let str:string = 'string';
// let bool:boolean = false;
// let arr1:Array<number> = [12,45];
// let arr2:number[] = [23,25];
// enum enumInter {
//   age='abc',
//   name= 1,
//   gender
// }
// let interEnum:enumInter = enumInter.gender;
// console.log(interEnum);

// let m: number | null | string | boolean;
// m = true
// let n: number;
// console.log(n)

// var str = '1' 
// var str2:number = <number> <any> str   //str、str2 是 string 类型
// console.log(str2)

// var t = 123;
// t = '7898' // t已经被推断为number类型，现在设置为string类型会编译报错

// 参数不能同时设置为可选和默认
// function getName(name: string, age?: number):string{
//   return name + age;
// }

// getName('zs')

// let getAge = function(name: string, age: number):number{
//   return age;
// }

// let otherFn = function(a: number, b: number){
//   return a + b;
// }

// // var myFunction = new Function('a', 'b', 'return a + b');
// // myFunction(1,2,3);
// // myFunction('a', 'b', 'c')

// function factorial(number:number):number {
//   if (number <= 0) {         // 停止执行
//       return 1; 
//   } else {     
//       return (number * factorial(number - 1));     // 调用自身
//   } 
// }; 

// let tl = (a: number, b: number) => (a + b);

// var func = (x:number | string)=> { 
//   if(typeof x == "number") { 
//       console.log(x+" 是一个数字") 
//   } else if(typeof x=="string") { 
//       console.log(x+" 是一个字符串") 
//   }  
// } 
// func(12) 
// func("Tom")

// 函数重载
// function fn(p:string):void;
// function fn(p:number, m: string):void;
// function fn(p: any, m?:string):void{
//   console.log(p)
// }

// let arr1:string[] = ['1', '2'];
// let arr2:Array<number> = [1,3,4];
// let arr3:string[];
// arr3 = ['a', 'b']

// var arr:number[] = [12,13] 
// var[x,y] = arr // 将数组的两个元素赋值给变量 x 和 y
// console.log(x) 
// console.log(y)

// var arrMore: number[][] = [[1,2], [23]]

// var strArray:string[] = ['a', 'b', 'c'];
// function getName(str:string[]):any {
//   return str[0]
// }

// 在ts中数组中的数据类型都是相同的，如果存储的元素数据类型不同，可以使用元组
// var tuple_name = [10, 'string'];

// var [a, b] = tuple_name;
// a = 'string';
// b = 89
// var arr: string[] = ['1', '2'];
// var [m, n] = arr;


// ts中接口的相关

// interface IPerson{
//   firstName: string,
//   lastName: string,
//   sayHi: (m:string) => string
// }

// var custom: IPerson = {
//   firstName: 'zs',
//   lastName: 'hahh',
//   sayHi: (m:string):string => 'uuu'
// }

// 属性类接口 -- 联合类型 用于对象
// interface IInfo {
//   title: string,
//   count: number,
//   other: string | number | string[] | (() => string)
// }

// var info:IInfo = {
//   count: 100,
//   other: 'slajdfla',
//   title: '这是一段文本信息'
// }

// interface IArray {
//   [index: number]:string
// }
// var arr:IArray = [];
// arr[0] = '123'
// interface IArrayOther {
//   [index: string]: number
// }

// ts中对象必须是特定类型的实例
// var sites = {
//   site1: "Runoob",
//   site2: "Google",
//   sayHello: function () { } // 类型模板
// };
// sites.sayHello = function () {
//   console.log("hello " + sites.site1);
// };
// sites.sayHello()

// var sites = { 
//   site1:"Runoob", 
//   site2:"Google",
// }; 
// var invokesites = function(obj: { site1:string, site2 :string }) { 
//   console.log("site1 :"+obj.site1) 
//   console.log("site2 :"+obj.site2) 
// } 
// invokesites(sites)

// interface IPoint {
//   x: number,
//   y: number
// }

// function addPoints(p1: IPoint, p2: IPoint){
//   var x = p1.x + p2.x;
//   var y = p1.x + p2.x;
//   return { x, y };
// }

// var newPoint = addPoints({ x: 3, y: 4}, { x: 5, y: 6});

// 命名空间ts
// namespace SomeNameSpaceName {
//   export interface ISomeInterfaceName {}
//   export class SomeClassName {}
// }

// class XiaoJieJie2{
//   public sex:string
//   protected name:string
//   private age:number
//   public constructor(sex:string,name:string,age:number){
//       this.sex=sex
//       this.name=name
//       this.age=age
//   }
//   public sayHello(){
//       this.sayLove();
//       console.log('小哥哥好')
//   }

//   protected sayLove(){
//       console.log('我爱你')
//   }
// }

// var jiejie2:XiaoJieJie2 = new XiaoJieJie2('女','热巴',22)

// console.log(jiejie2.sex)
// jiejie2.sayHello()

// class Jspang {
//   public name: string
//   public age: number
//   public skill: string
//   constructor(name: string, age: number, skill: string){
//     this.name = name
//     this.age = age
//     this.skill = skill
//   }
//   public interest(){
//     console.log('1237491')
//   }
//   public getName = () => {
//     console.log('name', this)
//   }
// }
// let jsPangObj:Jspang = new Jspang('技术胖', 18, 'web');
// console.log(jsPangObj)
// jsPangObj.interest()

// // 子类
// class JsShuai extends Jspang {
//   public xingxing: string = '1234'
//   public interest(){
//     super.interest()
//     console.log('建立')
//   }
//   public zhuangQian(){
//     console.log('一个亿')
//   }
// }

// let other = new JsShuai('aaa', 3, 'ccc');
// console.log(other, '----')


// 接口
// interface SearchMan {
//   getName(source: string, subString: string):boolean
// }

// let obj:SearchMan = {
//   getName(source: string, subString: string):boolean {
//     return true
//   }
// }

// interface Fn {
//   (a:string, b: string):boolean
// }

// let fun: Fn = function(source: string, subString:string): boolean {
//   return true
// }

// namespace shuaiGe{
//   export class Dehua{
//       public name:string = '刘德华'
//       talk(){
//           console.log('我是帅哥刘德华')
//       }
//   }
// }

// namespace bajie{
//   export class Dehua{
//       public name:string = '马德华'
//       talk(){
//           console.log('我是二师兄马德华')
//       }
//   }
// }

// let dehua1:shuaiGe.Dehua   = new shuaiGe.Dehua()
// let dehua2:bajie.Dehua   = new bajie.Dehua()
// dehua1.talk()

// ts入门书籍
// 任意类型 
// 如果是 any 类型，则允许被赋值为任意类型。
// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// 在任意值上访问任何属性都是允许的： 但是编译成的js可能报错
// let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');

// let something;
// something = 'seven';
// something = 75;

// something.setName('Tom');

// 类型推论
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
// let myFavoriteNumber;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// 定义时没有写类型但是赋值了，会根据赋值的类型进行类型推断
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// 联合类型
// 联合类型使用 | 分隔每个类型。
// let myFavoriteNumber: string | number;

// 接口 对类进行定义
// interface Obj {
//   name: string,
//   age: number;
//   gender?: string
// }

// let p1:Obj = {
//   name: 'zs',
//   age: 18,
//   gender: '男'
// }

// 定义含任意属性的接口
// interface IPerson {
//   name: string, 
//   age: number,
//   [propName:string]: any // 增加任意属性，类型为any
// }
// let a = function(){

// }
// let p1:IPerson = {
//   name: 'zs1',
//   age: 13,
//   name1: 'zs',
//   age2: 18,
//   [2342]: 78
// }
// console.log(p1);

// 只读属性
// interface IPerson {
//   readonly id: number,
//   name: string, 
//   age: number
// }

// const xiaoming: IPerson = {
//   id: 9987,
//   name: 'xiaoming',
//   age: 18
// }

// xiaoming.id = 909 // 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

// 数组定义  
// 1.「类型 + 方括号」
// let fibonacci: number[] = [1,2,3,4,5];
// let array = [1, '2', '6', true];
// array.push()
// // 2.数组泛型 Array<elemType>
// let fibArray: Array<string> = ['a', 'b', 'c'];
// // 3.用接口表示数组
// interface IStringArray {
//   [index: number]: string
// }
// let arr3:IStringArray = ['1', '2'];
// let arr4: {
//   [index: number]:number
// } = [1,2,3];

// // 注意： 类数组（Array-like Object）不是数组类型， 不能用普通的数组的方式来描述，而应该用接口
// function sum(){
//   let args: {
//     [index: number]: number;
//     length: number;
//     callee: Function
//   } = arguments;
//   console.log(args);
// }

// 函数类型
// 输入多余的（或者少于要求的）参数，是不被允许的
// 定义方式有函数声明式和函数表达式
// let mySum /** 类型是推论而推断 */ = function(x: number, y: number): number {
//   return x + y;
// }
// 注：上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的
// 上面的代码等价如下 
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// let mySum: (x: number, y: number) => number = function(x: number, y: number): number{
//   return 234
// }
// mySum(1,2)

// // 用接口定义函数的形状
// interface IMyFunc {
//   (a: string, b: string): boolean;
// }
// let myFunc: IMyFunc = function(x: string, y: string): boolean {
//   if(x === y){
//     return true;
//   }
//   return false;
// }

// 参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数 此时就不受「可选参数必须接在必需参数后面」的限制了
// function buildName( lastName: string = 'Cat', firstName: string): string {
//   return firstName + '---' + lastName;
// }

// 函数重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// 需求 ：输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'
// 1.使用联合类型
// function reverse(x: number | string): number | string {
//   return x.toString().split("").reverse().join();
// }
// // 2.使用函数重载的方式（前几次都是函数定义，最后一次是函数实现）
// function getReverse(x: string): string; // 函数定义
// function getReverse(x: number): number; // 函数定义
// function getReverse(x: any): any { // 函数实现
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//       return x.split('').reverse().join('');
//   } else {
//     return '暂时不支持该类型的翻转';
//   }
// }

// console.log('number:', getReverse(787));
// console.log('string:', getReverse('Hello'));
// // console.log('obj:', getReverse(function(){})); // 报错

// 类型断言（Type Assertion）
// 类型断言可以用来手动指定一个值的类型。
// 语法: <类型>值 Or 值 as 类型
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// function getLength(something: string | number): number {
//   let a = something.toString(); // 不报错
//   return something.length; // 报错
// }

// 问题: 在还不确定类型的时候就访问其中一个类型的属性或方法
// function getLength(something: string | number): number {
//   if (something.length) { // 报错
//       return something.length;
//   } else {
//       return something.toString().length;
//   }
// }
// 解决
// function getLength(something: string | number): number{
//   if((<string>something).length) { // 使用类型断言
//     return (something as string).length;
//   }else {
//     return something.toString().length;
//   }
// }

// 声明文件 声明文件必需以 .d.ts 为后缀。

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// /// <reference /> 三斜线指令

// 声明语句中只能定义类型，切勿在声明语句中定义具体的实现


// 2019/10/22 ts进阶部分
// 类型别名
// type Name = string;
// type NameResolve = () => string;
// type NameOrResolve = Name | NameResolve;
// function getName(n: NameOrResolve): Name {
//   if(typeof n == 'string'){
//     return n;
//   }else {
//     return n();
//   }
// }

// 字符串字面量类型
// type EventNames = 'click' | 'scroll' | 'mousemove';
// function handleEvent(ele: Element, event: EventNames) {
//     // do something
// }

// handleEvent(document.getElementById('hello'), 'scroll');  // 没问题

// 元组 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// let tom: [string, number] = ['Tom', 25];

// // 注： 
// 1.但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
// 2.当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
// let tom1: [string, boolean];
// tom1 = [ 'Tom' ] // 报错，缺少boolean



// 枚举：用于取值限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等
// enum Days {
//   Sun, Mon, Tue, Wed, Thu, Fri, Sat
// }

// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true

// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true
// 手动赋值
// enum Days {
//   Sun=7, Mon=1, Tue, Wed, Thu, Fri, Sat
// }

// console.log(Days["Sun"] === 7); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true
// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查
// enum Days {
//   Sun=7, Mon, Tue, Wed, Thu, Fri, Sat='S' as any // 类型断言 <类型>值 或 值 as 类型
// }

// enum Color {Red, Green, Blue = "blue".length};
// 常数枚举是使用 const enum 定义的枚举类型： 不能包含计算成员 假如包含了计算成员，则会在编译阶段报错：
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：
// declare enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];


// 类
/**
 * 面向对象（OOP）的三大特性：封装、继承、多态
 * 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。
 *                        外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，
 *                          同时也保证了外界无法任意更改对象内部的数据
 * 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 多态（Polymorphism）：由继承而产生了相关的不同的类，
 *                      对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。
 *                      此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，
 *                       就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
 */

 // ts中类的用法： public private 和 protected

//  public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
//  private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
//  protected(不能在子类中访问) 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
// class Animal {
//   public name: string;
//   public constructor(name: string){
//     this.name = name;
//   }
//   public fun(){
//     this.sayHi()
//   }
//   private sayHi (){
//     console.log('hello');
//   }
// }
// let a = new Animal('Tom');
// a.fun()
// // a.sayHi() // 报错

// 修饰符还可以使用在构造函数参数中，等同于类中定义该属性，使代码更简洁。
// class Animal {
//   // public name: string;
//   public constructor(public name: string){
//     this.name = name;
//   }
// }

// 抽象类(abstract) 抽象类是不允许被实例化, 可以用于继承 抽象类中的抽象方法必须被子类实现
// abstract class Animal {
//   public readonly name: string;
//   public constructor(name: string, public readonly age: number){
//     this.name = name;
//     this.age = age;
//   }
//   public abstract sayHi():any;
// }

// class Cat extends Animal {
//   constructor(name: string, age: number){
//     super(name, age);
//   }
//   public eat(){
//     console.log('cat');
//   }
//   public sayHi(){
//     // 如果不写该函数，会报错，因为抽象类的抽象方法必须被子类实现
//   }
// }

// let cat = new Cat('tom', 2);

// 类与接口 对类的一部分行为进行抽象  类实现(implements)接口
// interface IAlarm {
//   alert():any;
// }
// interface Light {
//   lightOn():any;
// }
// class Door {

// }
// class SecurityDoor extends Door implements IAlarm, Light {
//   alert(){
//     console.log('SecurityDoor alert');
//   }
//   lightOn(){
//     // do something...
//   }
// }
// class Car implements IAlarm {
//   alert(){
//     console.log('Car alert');
//   }
// }

// // 接口继承接口
// interface Alarm {
//   alert():any;
// }
// interface LightableAlarm extends Alarm {
//   lightOn(): any;
// }

// 接口继承类
// class Point {
//   x: number;
//   y: number;
//   constructor(x:number, y: number){
//     this.x = x;
//     this.y = y;
//   }
// }
// interface Point3d extends Point {
//   z: number;
// }
// let point3d: Point3d = {
//   x: 1,
//   y: 2,
//   z: 3
// }

// 混合类型  使用接口的方式来定义一个函数需要符合的形状
// interface SearchFunc {
//   (source: string, subString:string ): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string){
//   return source.search(subString) !== -1;
// }
// 一个函数还可以有自己的属性和方法
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) { };
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;



// 泛型
// 在定义函数，接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// function createArray(length: number, value: any):Array<any> {
//   let result = [];
//   for(let i:number = 0; i < length; i++){
//     result[i] = value;
//   }
//   return result;
// }
// createArray(3, 'x');
// 缺陷： 没有准确的定义返回的类型
// 使用泛型<T>
// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for(let i = 0; i < length; i++){
//     result[i] = value;
//   }
//   return result;
// }
// createArray(3, 'kasdhf');
// createArray<string>(3, 'kasdhf');

// 多个类型参数
// function swap<T, U>(tuple: [T, U]): [U, T]{
//   return [tuple[1], tuple[0]];
// }
// swap([7, 'seven'])

// 泛型约束
// interface ILengthwise {
//   length: number;
// }
// function loggingIdentity<T extends ILengthwise> (arg: T): T{
//   console.log(arg.length);
//   return arg;
// }
// loggingIdentity({
//   length: 23234
// })

// function copyFields<T extends U, U>(target: T, source: U): T {
//   for(let id in source){
//     target[id] = (<T>source)[id];
//   }
//   return target;
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };

// copyFields(x, { b: 10, d: 20 });

// 泛型接口
// interface CreateArrayFunc {
//   <T>(length: number, value: T):T[];
// }
// let createArray: CreateArrayFunc;
// createArray = function <T>(length: number, value: T):T[]{
//   let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
// // ======> 等价如下：
// let func:<T>(length: number, value: T) => T[] = function<T>(length: number, value: T):T[]{
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }


// 把泛型参数提前到接口名上  此时在使用泛型接口的时候，需要定义泛型的类型。
// interface CreateArrayFunc<T> {
//   // (length: number, value: T): T[];
//   (length: number, value: T): Array<T>;
// }

// let createArray: CreateArrayFunc<any>;
// createArray = function<T>(l: number, v: T):T[]{
//   let result: T[] = [];
//   for(let i = 0; i < l; i++){
//     result.push(v);
//   }
//   return result;
// }
// createArray(3, 'x'); // ['x', 'x', 'x']

// 泛型类 (泛型也可以用于类的类型定义中)
// class GenericNumber<T> {
//   zeroValue: T;
//   constructor(zeroValue: T){
//     this.zeroValue = zeroValue;
//   }
//   add: (x: T, y: T) => T = function(x: T, y: T){
//     return x;
//   }
// }

// let myGenericNumber = new GenericNumber<number>(0);
// myGenericNumber.add = function(x, y) { return x + y; };

// 泛型参数的默认类型
// function createArray<T = string>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }
// createArray(3, 8)
