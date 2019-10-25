"use strict";
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
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
