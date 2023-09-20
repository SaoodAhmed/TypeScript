"use strict";
// Differences between Type Aliases and Interfaces:
const CarAlias = {
    name: "Mehran",
    wheels: 4
};
console.log(CarAlias);
const CarInter = {
    name: "Corolla",
    wheels: 4,
    seatBealt: true
};
console.log(CarInter);
const CarInter1 = {
    name: "Suzuki",
    wheels: 4,
};
console.log(CarInter1);
let person = {
    name: "Saud Ahmed",
    age: 23,
    type: "Poet",
};
console.log(person.type);
// person.age = 50   // Error: Cannot assign to 'age' because it is a read-only property
person.type = "Writter";
console.log(person.type);
let fan1 = {
    madeBy: "Pakistan",
    noOFBlades: 4,
    winding: "Copper",
    rpm: 500
};
fan1.madeBy = "Sindh";
const FanFunc = (fan) => {
    console.log(fan.madeBy);
};
FanFunc(fan1);
let methodAndProp = {
    left: 5,
    right: 34,
    MethodAdd(a, b) {
        return this.left + this.right;
    },
    PropMethodDivid: (x, y) => x / y // We cann't use left & right properties here, using this keyword
};
// methodAndProp.left = 6   // Error: Cannot assign to 'left' because it is a read-only property.
console.log(methodAndProp.MethodAdd(34, 45), methodAndProp.PropMethodDivid(30, 5));
console.log(methodAndProp.PropMethodDivid(45, 34));
let person3 = {
    name: "Mustifa Nangraj",
    born: 1974,
    type: "Writter",
    method() {
        return `The great ${this.type} ${this.name} was born in ${this.born}  `;
    },
    propertyMethod: (philosopher) => `${philosopher.name} was born in ${philosopher.born}`
};
console.log(person3.method(), person3.propertyMethod(person3));
console.log(person3.propertyMethod(person3));
let addition = {
    method(left, right) {
        return left + right;
    }
};
let Multiplictaion = {
    method(left, right) {
        return left * right;
    }
};
console.log(addition.method(4, 5));
console.log(Multiplictaion.method(4, 5));
let myAdd = (a, b) => a + b;
let mySub = (a, b) => a - b;
let myMult = (a, b) => a * b;
let Divide = (a, b) => a / b;
console.log(myAdd(2, 4));
console.log(myMult(2, 4));
console.log(Divide(2, 4));
let calculat;
function math(a, b) {
    math.result = a - b;
    console.log("Result is: ", math.result);
}
math.result = 0;
calculat = math;
calculat(5, 4);
let door1 = {
    color: "Gray",
    height: 3,
    width: 0.5,
    madeBy: "pakistan"
};
console.log(door1);
let mySoftwareHouse = {
    name: "AsmSa",
    members: "50K",
    location: "virtual",
    reactDevelopers: 20000,
    SQA: "teams"
};
console.log(mySoftwareHouse);
let fruitCount = {};
fruitCount.apple = 4;
fruitCount.mango = 12;
fruitCount.organge;
console.log(fruitCount.organge);
const publishDates = {
    Frankenstein: new Date("1 January 1818"),
};
//publishDates.Frankenstein; // Type: Date
console.log(publishDates.Frankenstein.toString()); // Ok
let myNovel = {
    Kreuzer_Sonata: 1828,
    Tawaif: 1886
};
// let myNovel1:novels = {   // Property 'Kreuzer_Sonata' is missing in type
//     Gaddar:1968,
// }
console.log(myNovel);
const mixesStringAndNumbers = {
    1: "Hi!",
    2: "I Love You!",
    str: "string",
    und: undefined
};
console.log(mixesStringAndNumbers);
const EshaqNovel = {
    author: {
        name: "Mustifa Nangraj"
    },
    setting: {
        year: 1965,
        place: "TandoJam"
    }
};
console.log(EshaqNovel);
let myAnimal = {
    name: "Buffalo",
    type: "mammals",
    legs: 4,
    livingDuration: 40,
    livingOn: "Land",
    weightLimit: 600
};
console.log(myAnimal);
let Saad = {
    id: 72,
    name: "Saud Ahmed",
    age: 23,
    gender: "Male",
    martialStatus: "Married",
    course: "Typescript Coding",
    academy: "AsmSa",
    experienceInYears: 4,
};
let Saood = {
    rollNo: 72,
    name: "Saud Ahmed",
    age: 23,
    martialStatus: "Unmarried",
    gender: "Male",
    class: "Software Engineering",
    course: "typescript coding"
};
console.log(Saad, Saood);
