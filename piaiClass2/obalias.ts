// type Pen = {
//     name:string,
//     price:number
// };

// let pen1: Pen = {
//     name:"Piano",
//     price:30

// };

// let pen2: Pen = {
//     name:"Ball pen",
//     price:15
// };

// console.log(pen1.name+" bush pen price is "+pen1.price+" rupes");
// console.log(pen2.name+" price is "+pen2.price+" rupes");



// type Address = {address1: string, address2: string,zip: number, city:string,country:string };
// type Person =  
// {
//     name: string, 
//     age: number, 
//     address:Address //'nested object
// };

// let addressQasim: Address = {
//         address1: "address 1",
//         address2: "address 2",
//         zip: 74300,
//         city: "Karachi",
//         country: 'Pakistan'
// };
// let personQasim: Person = 
// {
//     name: 'Qasim',
//     age: 30,
//     address:addressQasim

// }

// const Car : {
//     make: string,
//     model: string,
//     owner: Person, //nested object
//     ownerAddress: Address, //nested object
// } = {
//     make: "Mehran",
//     model: "2020",
//     owner: personQasim,
//     ownerAddress: addressQasim
// }


// console.log(Car);





type Address = {Address1:string, Address2:string,zip:number,city:string, country:string };
type Person = {name:string, age:number};

let addressSaud:Address = {
    
    Address1:"Address1",
    Address2:"Address2",
    zip:12334,
    city:"Hyderabad",
    country:"Sindh"

};

let personSaud:Person = {
    name:"Saud Ahmed",
    age:23
};

const Car:{
    make:string,
    model:string,
    owner:Person,
    ownerAddress:Address,   
} = {
    make:"mehran",
    model:"2022",
    owner: personSaud,
    ownerAddress: addressSaud

}

console.log(Car);
