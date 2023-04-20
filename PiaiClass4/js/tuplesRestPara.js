"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function add(a:number, b:number){
//     return a+b;
// }
// let result = add(34,56)
// console.log(result);
// let nums:[number,number] = [34,56]
// console.log(add(...nums));
function multi(left, right) {
    return left * right;
}
let nos = [
    [45, 56],
    [45, 53],
    [72, 54] // 2
];
let show = (nos) => {
    return nos.forEach(items => {
        console.log(multi(...items));
    });
};
show(nos);
