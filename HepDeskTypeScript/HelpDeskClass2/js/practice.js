"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = "str1"; // explict
a = "str2";
a = "str3";
console.log(a);
var var1 = "str"; // implict
// var1 = 2     // error bcz var1 is string
console.log(var1);
let var2;
var2 = "any";
var2 = 34;
var2 = true;
const var12 = "love"; // literal type can not be changed
let comb1 = {
    size: 10,
    price: 150,
    noOfTeeth: 350
};
let comb2 = {
    size: "12 inches",
    price: 200,
    noOfTeeth: 400
};
let book1 = {
    title: "Tawaif",
    noOfPages: 200,
    price: 250,
    author: {
        name: "Saleem Jamali",
        born: 1992
    }
};
console.log(book1.title, book1.author.name);
console.log(comb1.size, comb2.price);
let vehicle1 = {
    name: "Honda",
    wheels: 2,
    color: "red",
    price: 500000,
    fuel_capacity: 10
};
console.log(vehicle1);
// ***************Object type****************
let Author;
let aBook;
let book2 = aBook = {
    title: "xyz",
    pages: 234,
    price: 500,
    author: { name: "Saud Ahmed", born: 1998 }
};
console.log(book2.title, book2.author.born);
// let Tea:{ // object type
//     teaType:string;
//     pricePerHalfCup:number;
// } = {
//     teaType:"Coffe",
//     pricePerHalfCup:50
// }
// Tea = {
//     teaType: "Green tea",
//     pricePerHalfCup: 20
// }
// console.log(Tea.pricePerHalfCup);
// // let tea1=Tea =  {
// //     teaType:"black tea",
// //     pricePerHalfCup:15;
// // }
// let Car = {
//     model:2019,
//     name:"Corolla",
//     color:'Black',
// }
// console.log(Car);
// console.log(Car['model']);
// console.log(Car.model);
