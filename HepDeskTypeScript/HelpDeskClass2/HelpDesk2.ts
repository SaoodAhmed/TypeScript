var str:string = 'text'; // explict
console.log(str);


// var var1 = 4;  // implict 
// console.log(var1);



// let var2;  
// var2 = 'string'
// var2 = 3;
// var2 = true
// console.log(var2);


//union*************************

// let unon: string|number;

// unon = 'text';
// unon = 4;
// //unon = true; // error 
// console.log(unon);

// ############################

// let strNum:(string|number)[];
// strNum = [5, 'text1', 'text2', 'text3', 5];
// console.log(strNum);



// alias ########################

// type car = {
//     price:number,
//     model:string,
//     location:string
// }

// let car1:car = {
//     model:"corolla",
//     price:2000000,
//     location:"Hyderabad"
// }

// const car2:car = {
//     model:"Mehran",
//     price:500000,
//     location:"Jacobabad",
// }

// console.log(car1);
// console.log(car2);


// function**********************

// function func(value1:(string|number)){
//     if(typeof value1 === 'string'){
//         console.log('The value u entered is string');

//     }else{
//         console.log('The value u hav type is number');
//     }
// }
// func('text');
// func(5);


// narrowing ************************

let var1:string|number;
var1 = 'text';
var1.toUpperCase;
console.log(var1);

var1 = 5;
var1.toString



// literal type
const var4 = 'Love';  // literal type use same as it is every where
let var3 = 5;
var3 = 78;

// 0bject type *************************

let hotl:{
    name:string;
    food_time:number,
    noOfRooms:number;
} = {
    name:"jacobHotel",
    food_time:3,
    noOfRooms:55
}
console.log("Hotel is "+hotl.name, hotl.food_time,"time of food avalaibe & number of rooms are ", hotl.noOfRooms);



// alias objects************************

type laptop = {
    name:string,
    memory:{ROM:number, RAM:number}
    OS:string,
    generation:number,
    window?:number
}

let Laptop:laptop = {
    name:"Lenovo",
    memory:{ROM:500, RAM:8},
    OS:'64-bit',
    generation:3,
    window:7
}

console.log("Laptop is "+Laptop.name,"with",Laptop.memory.RAM+" GB RAM"," with ", Laptop.OS+" OS installed");


