// interface lap{
//     name:string,
//     price:number,
//     memory:{
//         RAM:number,
//         ROM:number
//     }
//     generation:number,
//     processor:string
// }

// let laptop:lap = {
//     name:"Lenovo",
//     price:18000,
//     memory:{
//         RAM:8,
//         ROM:360
//     },
//     generation:3,
//     processor:"core(TM)i5"

// }

// console.log(laptop.memory.RAM,laptop.name);



interface Person{
    [a:string]:string|number|Date|Object,
    name:string,
    age:number,
    dob:Date,
    gender:"Male"|"Female"
}

let Adult:Person = {
    name:"Saud Ahmed",
    age:21,
    dob:new Date(),
    gender:"Male"
}

Adult.address = {
        country:"Sindh",
        province:"Hyd",
        location:"Qasimabad",
        postalcode:234232
}

console.log(Adult);