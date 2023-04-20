"use strict";
let arr1 = [
    5,
    "string",
    [3, 5, 6, 4, 5],
    5,
    ["string", "wrr"]
];
let a = [];
a.push(5);
a[0] = "str";
console.log(a);
let arr2;
arr2 = [4, 6, "str & number only"];
let arr3;
arr3 = [5, 6, ["string only"]];
let multDemArray = [
    [1, 2, 3, 4, 5],
    [34, 54, 54, 75, 32],
    [9, 6, 7, 8, 4] //2
];
console.log(multDemArray[1][3]);
multDemArray.push([9, 5, 8, 7, 2, 55]); //3
console.log(multDemArray);
