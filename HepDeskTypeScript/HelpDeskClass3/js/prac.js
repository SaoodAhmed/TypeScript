"use strict";
// type Withfname = {
//     fname:string;
// }
// type WithLname= {
//     lname:string;
// }
// let hasBoth = {
//     fname : "Saud",
//     lname : "Ahmed"
// }
// let firstName:Withfname = hasBoth;
// console.log(firstName);
// type FirstAndLastName = {
//     fname:string;
//     lname:string;
// }
// let hasBoth:FirstAndLastName = {
//     fname:"Saud",
//     lname:"Ahmed"
// }
// let hasOnlyOne:FirstAndLastName = {   error not possible with one property
//     fname:"Ahmded"
// }
var books;
(function (books) {
    books[books["book1"] = 0] = "book1";
    books[books["book"] = 2] = "book";
    books[books["book3"] = 3] = "book3";
})(books || (books = {}));
let book = books.book3;
console.log(book);
let book1;
book1 = books.book1;
console.log(book1);
