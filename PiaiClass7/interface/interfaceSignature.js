"use strict";
//type calculator = (left:number, right:number)=>number;
let add = (left, right) => left + right;
let subt = (left, right) => left - right;
let multiply = (left, right) => left * right;
let div = (left, right) => left / right;
console.log(add(5, 6));
console.log(subt(9, 4));
console.log(multiply(8, 2));
console.log(div(7, 2));
let calculator;
// let calculator:calc = {
//     result:0,
//     abc(a,b){
//         this.result = a-b;
//         console.log("result is "+this.result)
//     }
// }
// calculator.abc(8,7);
function maths(a, b) {
    maths.result = a - b;
    console.log("result is: " + maths.result);
}
maths.result = 0;
calculator = maths;
calculator(4, 6);
