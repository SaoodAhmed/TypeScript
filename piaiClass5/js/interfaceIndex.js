"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let calculator = {
    add() {
        if (typeof this.left === 'number' && typeof this.right === 'number') {
            return this.left + this.right;
        }
        else {
            return 0;
        }
    },
    subtract() {
        if (typeof this.a === 'number' && typeof this.b === 'number') {
            return (this.a - this.b);
        }
        else {
            return 0;
        }
    },
    multi: (a, b) => a * b
};
calculator.left = 23,
    calculator.right = 32,
    calculator.a = 26,
    calculator.b = 6;
calculator.divide = (a, b) => a / b * 3;
calculator.add1 = (a, b) => {
    return a + b;
};
console.log(calculator);
// console.log(calculator.divide(6,3));
// console.log(calculator.multi(5,6))
// console.log(calculator.add(),calculator.subtract());
console.log(calculator.add1(22, 56));
let house1 = {
    Hounum: "D-37 Gulshan-e-Mehran phase ii",
    noOfFloors: 1,
    numOfRooms: 7,
    attachWashrooms: 6,
    numOfRoomsWithOutWashrooms: 1,
    kitchen: 2,
    Address: {
        country: "Sindh",
        province: "Hyd",
        city: "Qasimabad",
        postalcode: 234344,
        phoneno: 3166679070
    }
};
console.log(house1);
console.log(house1.Address.phoneno);
