export {}
let a:string = "str1"; // explict
a = "str2";
a = "str3"
console.log(a);



var var1 = "str";  // implict
// var1 = 2     // error bcz var1 is string
console.log(var1);


let var2;
var2 = "any";
var2 = 34;
var2 = true;


const var12 = "love"; // literal type can not be changed
// var12 = "HI"




// **************** Alias Type**************

type comb = { // alias type
    size:string|number;
    price:number;
    noOfTeeth:number;

}

let comb1:comb = {
    size:10,
    price: 150,
    noOfTeeth:350

}

let comb2:comb = {
    size:"12 inches",
    price:200,
    noOfTeeth:400

}





type Author = {
    name:string;
    born:number;
}

type Book = {
    title:string;
    noOfPages:number;
    price:number|string;
    author:Author
}


let book1:Book = {
    title:"Tawaif",
    noOfPages:200,
    price:250,
    author: {
        name:"Saleem Jamali",
        born:1992
    }
}

console.log(book1.title, book1.author.name);


console.log(comb1.size, comb2.price);




// Union Type aliased objects ********************************


type Car = {
    name:string;
    wheels:number;
    color?:string;
    price:number;
    fuel_capactye:number;
}

type motorCycle = {
    name:string;
    wheels:number;
    color?:string;
    price:number;
    fuel_capacity:number;
}


type Vehicle =  Car|motorCycle;

let vehicle1:Vehicle = {
    name:"Honda",
    wheels:2,
    color:"red",
    price:500000,
    fuel_capacity:10
}

console.log(vehicle1)



// ***************Object type****************





let Author:{
    name:string;
    born:number;
    
}


let aBook:{
    title:string;
    pages:number;
    price:number;
    author:Author;
}

let book2 = aBook = {
    title:"xyz",
    pages:234,
    price:500,
    author:{name:"Saud Ahmed", born:1998}

}

console.log(book2.title, book2.author.born)





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





