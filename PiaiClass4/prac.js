"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var arr1 = ["Hi", "Hello"];
var arr2 = [3, 3443, 3434, 434,];
var arr3 = ["Hi", 234, true, 343];
var arr4 = ["Hi", 34, false, 43, "sdf"];
var arr5 = ["text1", "text2"];
arr5.push("text3");
//arr5.push(5);  //error
arr4.push(5);
console.log(arr5, arr4);
var a = [];
a.push(5);
a[0] = "str";
console.log(a);
var soldiers = ["Ahmed", "Ali", "Asad"];
var soldersAge = [34, 22, 53];
var joinus = __spreadArray(__spreadArray([], soldiers, true), soldersAge, true);
console.log(joinus);
var logWarrior = function (greetings) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log(greetings, name_1);
    }
};
var warriors = ["Saud", "Ahmed", "Ali"];
logWarrior.apply(void 0, __spreadArray(["Hello"], warriors, false));
