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


enum books{
    book1,
    book=2,
    book3,
}

let book:books = books.book3
console.log(book);


let book1:books;
    book1 = books.book1;
console.log(book1);