"use strict";
// let showtable: () => number[];
// showtable = ()=>{
//     return [6, 5, 6, 7]
// }
// console.log(showtable());
// let showarray = ()=>[45,6,6,9];
// let result:number[] = showarray();
// result = showarray();
// result.push(45);
// console.log(result);
// let calc : ((left:number, right:number)=>number)[] = [];
// let add = (left:number, right:number)=>left+right;
// let subtract = (left:number, right:number)=>left-right;
// let multiply = (left:number, right:number)=>left*right;
// calc.push(add);
// calc.push(subtract);
// calc.push(multiply);
// calc.push((left:number,right:number)=>left/right)
// console.log(calc[0](50,70)); // 120
// console.log(calc[1](20,5)); // 15
// console.log(calc[2](45,343)); // 15435
// console.log(calc[3](20,5)); // 4
// // for loop
// console.log("for loop")
// for(let i=0;  i<calc.length; i++){
//     console.log(calc[i](5,7));
// }
// // iterator method (callback)
// console.log("forEach Iterator");
// calc.forEach(method=>console.log(method(40,35)));
let arrayType = [];
let no1 = (a) => a;
let no2 = (a) => a;
arrayType.push(no1);
arrayType.push(no2);
console.log(arrayType[0](3));
