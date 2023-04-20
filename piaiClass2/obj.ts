type Address = {
    address1?:string,
    address2:string,
    zip:number
};

type person = {
    name:string,
    age:number,
    address?:Address
};

const Person:person = {
    name:"xyz",
    age:34,
    address:{
        address2:"Address2",
        zip:3434
    }
}
console.log(Person);