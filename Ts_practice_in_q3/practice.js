// const nalo:string = Math.random()>0.5?"Saud Ahmed":"Sarki";
// console.log({nalo})
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const nam = nalo.toUpperCase()
// console.log({nam})
// const num = 91.2342;
// console.log(num.toPrecision(4))
// ##################################################Type Annotation
var book1;
book1 = "Eshiq";
console.log(book1);
var book2;
book2 = "Ghadar";
console.log(book2);
var flower;
flower = "AsmSa";
console.log(flower);
var id1 = 72;
console.log(id1);
// ################################# Object Type
var AsmSa;
AsmSa = {
    relation: "Love",
    duration: "Infinity",
    stillContinue: true
};
console.log(AsmSa, AsmSa.relation);
var student = {
    name: {
        firstName: "Saud",
        lastName: "Ahmed"
    },
    rollNo: 72,
    age: 23
};
console.log(student.name.firstName);
var poem = Math.random() > 0.5 ? { name: "Saud Ahmed", pages: 233 } : { name: "Saad", rhyms: true };
console.log(poem.name);
if ("pages" in poem) {
    console.log(poem.pages);
}
else {
    console.log(poem.rhyms);
}
// #################################### Function and sread operators
var allSongs = function (singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    console.log("i am ".concat(singer, " here, i have sung these songs ").concat(songs));
};
allSongs("Saud Ahmed", "Inqlab saa thyo", "Hath m khani hithyar qalam ja ", "Maa ba pehnji mulak m ahyan akelo");
var fruits = ["apple", "pine apple", "mango", "orange"];
fruits.forEach(function (fruit, index) {
    console.log("".concat(fruit, " ").concat(index));
});
// type NumberToString = (input:number)=>string;
// const useNumberToString = (numberToString:NumberToString)=>{
//     console.log(`the string is: ${numberToString(234)}` )
// }
// useNumberToString((input)=>`${input}! Number arrived!`)
// const raiseError = (message:string):never=>{
//     throw new Error(message)
// }
// raiseError("Error")
var Deshi = ["Saud Ahmed Sarki", "Shaheed Bashir Khan Qureshi", "Shaheed Muzafir Bhutto", "Shaheed Afzal Luand"];
var age = [23, 20, 40, 35];
var joinded = [
    __spreadArray([], Deshi, true),
    __spreadArray([], age, true)
];
console.log(joinded[1][2]);
var Wellcome = function (greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("".concat(greeting, " ").concat(name_1));
    }
};
var warriors = ["Saud Ahmed", "Rashid", "AsmSa"];
Wellcome.apply(void 0, __spreadArray(["Namisty"], warriors, false));
var Yold = [23, 21, 30];
Wellcome.apply(void 0, __spreadArray(["I am "], Yold, false));
// ################################ Tuples 
var Person = function (name, age) {
    console.log("My name is ".concat(name, " & i'm ").concat(age, " years old..!!"));
};
//const pairOfTuplesIncorrect:[number,string] = [23,"Saud Ahmed"]
//Person(...pairOfTuplesIncorrect)
// Error:Argument of type 'number' is not assignable to parameter of type 'string'.
var pairOfTuplesCorrect = ["Saud Ahmed", 23];
Person.apply(void 0, pairOfTuplesCorrect); //0k
// const pairArray = ["Saud Ahmed",23]
// Person(...pairArray)
// Error:A spread argument must either have a tuple type or be passed to a rest parameter.
