"use strict";
exports.__esModule = true;
var result;
function doAdd(left, right) {
    if (typeof left === 'undefined' || typeof right === 'undefined') {
        return;
    }
    else if (typeof left === 'number' && typeof right === 'number') {
        result = left + right;
    }
    else {
        result = "string";
    }
}
doAdd();
console.log(result);
doAdd(5, 6);
console.log(result);
// doAdd("3", "7");
//console.log(result);
doAdd("23");
console.log(result);
