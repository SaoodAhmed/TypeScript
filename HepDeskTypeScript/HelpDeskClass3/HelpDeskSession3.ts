// *********************Object method-1*************************


// let fridge:{
//     name:string,
//     height:number,
//     width:number,
//     area:string,
//     weight:number
// } = {
//     name:"Hair",
//     height:1.5,
//     width:0.2,
//     area:'3.0 m^2',
//     weight:25
// }

// console.log(fridge.area);


// **************************Object type Method-2*********************


// let tbl = {
//     color:"Yellow",
//     weight:15,
//     noOfSheves:5
// }

// console.log(tbl.noOfSheves);


// let Person:{
//     name:string,
//     age:number,
//     address:string
// }

// let Person1 = Person = {
//     name:"Falak Sher",
//     age:17,
//     address:"address1"
// }

// let Person2 = Person = {
//     name:"Saud Programmer",
//     age:23,
//     address:"Address2"
// }

// console.log(Person1.name,Person2.name);

// *********************Nested Object Type****************************

// let hotel:{
//     name:string,
//     htl:{noOfRooms:number, attachWashRooms:number}
//     location:string,
//     address:string
// }

// let Hotel1 = hotel = {
//     name:'xyz',
//     htl:{noOfRooms:40, attachWashRooms:1},
//     location:"Hyd",
//     address:"address1"
// }

// let Hotel2 = hotel = {
//     name: "abc",
//     htl:{noOfRooms:34, attachWashRooms:2},
//     location:"Jcd",
//     address:"Address2"
// }

// console.log(Hotel1.htl.attachWashRooms, Hotel2.name);

// let Desease:{
//     person:{name:string, age:number, address:string},
//     name:string,
//     hospitalName:string,
//     location:string
// }

// let disease1 = Desease = {
//     person:{name:"xyz", age:65, address:"Thull"},
//     name:"Sugar",
//     hospitalName:"'Gem'",
//     location:"jacobabad"
// }
// console.log("Person address is "+disease1.person.address, "& hospital is "+disease1.hospitalName);



// let City:{
//     name:string,
//     address:{address1:string, address2:string},
//     location:string,
//     zipno?:number
// } = {
//     name:"xyz",
//     address:{address1:"address1", address2:"address2"},
//     location:'USA',
//     zipno:234324
// }
// console.log(City.name);

// let city1 = City = {
//     name:"Hyd",
//     address:{address1:"add1", address2:"add2"},
//     location:'Pakistan'
// }
// console.log(City.name);




// ******************var vs let vs const ************

// let nd const used within the body
// var used globaly inside or outside of function 
// recomendation is just use "let" !!

// var var2 = "saud"; // globaly used every where
// function func(){
//     var new_var = 5;
//     // let_new = 3;  error bcz let must be inside func not outside acces of that var
//     for(new_var; new_var<=10; new_var++){
//         let let_new = 2;
//         new_var = 7;
//         console.log(let_new, new_var);
//     }
// }
// func();




// ************Alias type objects **********

// type ferniture = {
//     nameOfFernSet:string,
//     price:number,
//     ferShopName:string,
//     city:string,
//     location?:string,
//     Address?:{Address1:string,},

// }

// let fert1:ferniture = {
//     nameOfFernSet:"table set",
//     price:10000,
//     ferShopName:"SaAsmFern",
//     city:"Hyd"
    
// }

// console.log(fert1.ferShopName);


// **************** Union Object Types *****************

// type motorCycle = {
//     name:string,
//     color?:string,
//     wheels:number,
//     model?:number,
//     fuel?:string,
//     fuel_Capacity:number
// } 

// type Car = {
//     name:string,
//     color?:string,
//     wheels:number,
//     make?:string,
//     model?:string,
//     numberOfSeats:number,
//     fuel_Capacity:number
// }

// type vehicle = motorCycle | Car

// let vehicle1:vehicle = {
//     name:"ToyaTa",
//     color:"blue",
//     numberOfSeats:4,
//     wheels:3,
//     fuel_Capacity:4
// }
// console.log(vehicle1);

// console.log("Write the name of Vahicle which has "+vehicle1.numberOfSeats," seats & ",vehicle1.wheels," wheels");




// ******* Enum data type used for counting or calculating somthing*********

// enum monthStartWithJ{
//     january = 1,
//     june,
//     july
// }


// let var1:monthStartWithJ = monthStartWithJ.july;
// console.log(var1);

// let var2:monthStartWithJ
//     var2 = monthStartWithJ.june
// console.log(var2);






enum HomeGrossary{
    apples = 2,
    banana,
    potatoes = 4,
    shoes,
    socks = 5,
}
console.log(HomeGrossary);

let gross1:HomeGrossary = HomeGrossary.banana
console.log(gross1);

let gross2:HomeGrossary
    gross2 = HomeGrossary.potatoes
console.log(gross2);
