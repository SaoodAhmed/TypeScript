"use strict";
exports.__esModule = true;
// function add(a:number, b:number):number{
//     return a+b;
// }
// console.log(add(5,7));
function tupSum(left, right) {
    return ['sum of ', left + right];
}
var _a = tupSum(7, 8), label = _a[0], result = _a[1];
label = "addition of two number ";
console.log(label + "return result " + result);
console.log(tupSum(5, 6));
// const monthWithLetterj = ["January","June"];
// monthWithLetterj[1] = "July";
// const daysOfWeek = ["Monday", "Tuesday", "Wednesday"] as const;
// daysOfWeek[0] = "Sunday"; // error
// console.log(daysOfWeek);
