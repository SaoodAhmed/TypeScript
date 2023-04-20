// type book = {
//     author?:string  // optional
//     pages:number
// };

// const book1:book = {
//     //author: "Ali",         // here, author is optional
//     pages:200

// };

// console.log(book1.author);


type address = {
    address1:string,
    address2?:string,
    zip?:number,
    city?:string,
    country:string
};

type person = {
    name:string,
    age:number,
    Address?:address  // optional + nested object
};

const person2: person = {
    name:"Hamza",
    age:2,
    Address:{
        address1:"Address1",
        country:"Pakistan"
    }
}

console.log(person2);
          