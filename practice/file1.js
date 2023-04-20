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
// const a = "Hi!";
// const b = a.concat(" Saud")
// const c = a.charAt(0);
// const d = a.indexOf("i")
// const e = a.charCodeAt(0);
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// const str = "i love u guys!!";
// console.log({str});
// let rocker = "Falak Sheer!!";
// console.log(rocker.toUpperCase());
// let num = 23434;
// console.log(num.toPrecision().concat("2"));
// console.log(2+ +"1")
// let a;
// a = "Hi";
// a = 2
// a = true;
// let var1 =  Math.random() > 0.5 ? "Allah ahein tun hi tun muhnjo":24;
// if(var1==="Allah ahein tun hi tun"){
//     console.log(var1.toUpperCase())
// }
// // var1.toUpperCase(); error
var lit = "Dinner";
var lit1;
lit1 = 45; // OK
// lit1 = "lunch"    // error;
lit1 = "Dinner";
var flower1 = true;
var flower2 = "Rose";
var foodInLunch = "Briyani";
var id = "72";
// Object Type**************************
// let Car:{
//     name:string;
//     model:number;
//     price:number;
//     weight:number;
//     color:string;
//     carSwitch:string|undefined
//     start():void;
//     //stop():void;
//     // drive():string;
//     brake ?: (carBrake:string)=>string;
// }
// let car1 = Car = {
//     name:"Mehran",
//     model:2000,
//     weight:500,
//     price:2000000,
//     color:"black",
//     carSwitch:'switch onn',
//     start(){
//         if(this.carSwitch === 'switch onn'){
//             console.log("Car started")
//         }else {
//             console.log("switch off")
//         }
//     },
//     brake(carBrake:string){
//        if(carBrake === 'jumper'){
//         return "jumper"
//        }else{
//         return "not a jumper"
//        }
//     }
// }
// car1.brake('');
// car1.start();
var employee = {
    name: "Asad",
    id: 3,
    department: "IT"
};
console.log(employee);
var cap = {
    price: 200,
    color: "Black"
};
cap.color = "Red";
// cap.color = 123  // error
var lightBulb;
lightBulb = { bulbType: "Saver", lightColors: "white", price: 200, size: "medium/normal" };
var newPoet;
newPoet = {
    name: "Saud",
    birthDay: 1998
};
console.log(newPoet);
var poem1 = {
    name: { fname: "Saud Ahmed", lname: "Sarki" },
    poetry: "poetry_name"
};
var varr = Math.random() > 0.5 ? { name: "Ghar jo rang", pages: 20 } : { name: "Ghar jo rang", rhyms: true };
console.log(varr.name);
var varr1 = {
    flood: true, location: "hyd", rain_mm: 100
};
console.log(varr1.flood);
var fruit1 = "mango";
console.log(fruit1);
var Book = { name: "Jien Ditho ahy mo", price: 250, dob: "june-23" };
console.log(Book.name, Book.price, Book.dob);
var oneArt = {
    // author:"xyz",
    // kigo:"Hi",
    // literal:"halku",
    author: "xyz",
    meter: 343,
    literal: "villanelle"
};
var mbile1 = {
    name: "Vivo"
};
var poem = Math.random() > .05 ? { name: "Pro", pages: 234 } : { name: "coding", rhyms: true };
console.log(typeof poem.name);
console.log(typeof poem.pages);
console.log(typeof poem.rhyms);
// functions
// function song(first:string, second?:string){
//     console.log(first,second)
// }
// song("hal muhnja keer","dil je veeran rinn ty");
// song("tuhnji yad ji");
// let song1 = (first:string, second?:string)=>{
//     console.log(first,second)
// }
// song1("hal mu hnja keer","dil je veeran rinn ty");
// function Person(name:string, age = 0){
//     if(age>=0 && age<=70){
//         console.log(`${name} is ${age} years old`)
//     }else{
//         console.log("not possible");
//     }
// }
// Person("Tufail");
// **************************************Spread operator/Rest operator with Arrow function
function spreadOrRest(person) {
    var Wives = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Wives[_i - 1] = arguments[_i];
    }
    for (var _a = 0, Wives_1 = Wives; _a < Wives_1.length; _a++) {
        var wife = Wives_1[_a];
        console.log("".concat(wife, " is married with ").concat(person));
    }
}
spreadOrRest("Tufail", "Ayesha", "Alia", "Reshma");
var singAllSongs = function (singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song = songs_1[_a];
        console.log("".concat(song, ", by ").concat(singer));
    }
};
singAllSongs("Tufail Sanjrani", "Jogi jogi m jogi", "sajan khy chaw sikk dadhi lagi aa");
var sortingArray = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    console.log(num.sort());
};
sortingArray(1, 5, 9, 2, 4, 7, 3);
var findSum = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    num.forEach(function (num) {
        sum = num + sum;
    });
    return sum;
};
console.log(findSum(1, 2, 3));
// **********************Explict Retrun types
var getSong = function (song) {
    switch (song) {
        case "Asan roi roi":
            return new Date('May 20, 1970');
        case "Dushman dost ma peda aksar yar thendo aa":
            return new Date();
        default:
            return undefined;
    }
};
console.log(getSong(""));
var addition = function (left, right) {
    return left + right;
};
var subtraction = function (left, right) {
    return left - right;
};
var multiplication = function (left, right) {
    return left * right;
};
var division = function (left, right) {
    return left / right;
};
console.log(addition(2, 5));
console.log(multiplication(3, 5));
console.log(division(9, 2));
// let res:number|string|boolean;
// function doAdd(left?:any, right?:any){
//     if(typeof left === 'undefined' || right === 'undefined'){
//         return;
//     }else if(typeof left==='number' && typeof right==='number'){
//         res = left+right;
//     }else{
//         res = 'str'
//     }
// }
// doAdd()
// console.log(res);
// doAdd(3,5);
// console.log(res);
// doAdd("3");
// console.log(res)
// const songs = ["Juice", "Shake It Off", "What's Up"];
// function runOnSongs(getSongAt: (index: number) => string) {
//     for (let i = 0; i < songs.length; i += 1) {
//         console.log(getSongAt(i));
//     }
// }
// function getSongAt(index: number) {
// return `${songs[index]}`;
// }
// runOnSongs(getSongAt);
// *****************arrays defination
var animal = ["animal class", "name", "legs"];
var person = ["name", "age", 2, true];
// let arr:[number,string, boolean] = [2,"programmer",false,2];
var ferniture = ["size", "ferniture base", "price"];
// ***************** Array of function types
// let tables:()=>number[];
// tables=()=>{
//     return [2,4,5,9]
// }
// console.log(tables());
// let tab=()=>[2,4,5,6];
// console.log(tab());
// let result = tab();
// result.push(3);
// console.log(result);
// let inputAndOutput = (songs:string[])=>{
//     return songs.forEach(song => {
//         console.log(`${song} ${count+1}`)
//     });
// }
// console.log(inputAndOutput(["s1","s2","s3"]));
// **************** Array of Union
var arr = [
    5,
    2,
    [3, 2, 1, "string"],
    true
];
console.log(arr[2]);
var arr1;
arr1 = [2, 3, 1, "string"];
// let arr2:(number|string[])[];
// arr2 = [ 2,4,5,['str1','str2'],4,2,["str3","str4"]];
// console.log(arr2);
// let arr3:number[][] = [
//     [1,2,3,4,5],
//     [6,7,8,9,7],
//     [5,2,3,4,6]
// ]
// console.log(arr3[1][3]);
// arr3.push([3,9,2,1,5]);
// console.log(arr3)
// let a = [];
// a.push(9);
// a[0] = 23;
// console.log(a);
// ************************restOperator
var sum;
sum = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (totalSum, num) { return totalSum + num; });
};
console.log(sum(2, 3, 4, 5, 3, 7));
// ********************Spread operator
var student = ["student id", "name", "age", 2,];
var country = ["Sindh", "Canada", "UAE"];
var fern = ["table", "chair", 4, "bed", true];
var stdCount = __spreadArray(__spreadArray([], student, true), [country], false);
var coutrFern = __spreadArray(__spreadArray([], country, true), fern, true);
console.log(stdCount);
console.log(coutrFern);
// let mult = (a:number, b:number):number=>{
//     return a*b;
// }
// console.log(mult(3,5));
// let nos:[number,number] = [3,9];
// console.log(mult(...nos));
var add = function (left, right) {
    return left + right;
};
var numb = [
    [3, 5],
    [6, 8],
    [7, 8]
];
var show = function (numb) {
    return numb.forEach(function (sum) {
        console.log(add.apply(void 0, sum));
    });
};
show(numb);
var toAdd = function (left, right) {
    return ['sum of', left + right];
};
console.log(toAdd(5, 6));
