"use strict";
exports.__esModule = true;
exports.add = void 0;
var add = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return +a + +b;
    }
};
exports.add = add;
