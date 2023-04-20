export{}

// type ac = {
//     [a:string]: string|number|Date,
//     creation:Date
//     name:string,
// }

// let ac1:ac = {
//     price:54000,
//     creation:new Date(),
//     name:"Gree"
// };

// ac1.current=4,
// ac1.size = "1.5 tons"
// ac1.create = new Date();
// ac1.name1 = "Haier",

// console.log(ac1);



// type Person = {
//     [imgProper:string]:string|number
// }

// let person:Person = {
// }

// person.age = 24,
// person.address = '37-d, Gulshan-e-Mehran phase-ii'

// console.log(person);



// interface uni{
//     [a:string] :string|number|boolean|undefined, // superset defination
//     name:string,
//     madeIn:number,
//     noOfTeachers:500|1000 // literal type
// }

// let university:uni = {
//     name:"Mehran UET",
//     madeIn:1922,
//     noOfTeachers:500 

// }
// university.location = "jamshoro, Sindh",  // dynamic means type can be changable
// university.numOfStudents = 2000 ,
// university.numOfDepart = "15"

// console.log(university);




interface calc{
    [i:string]:number|Function,
    add():number,
    subtract():number,
    multi:(a:number,b:number)=>number
}

let calculator:calc = {
    add(){
        
        if(typeof this.left === 'number' && typeof this.right === 'number'){
            return this.left + this.right;
        }else{
            return 0
    
        }
    },
    subtract(){
        if(typeof this.a ==='number' && typeof this.b ==='number'){
            return (this.a-this.b);
        }else{
            return 0;
        }

    },
    multi:(a:number,b:number)=>a*b
}


calculator.left = 23,
calculator.right = 32,

calculator.a = 26,
calculator.b = 6
calculator.divide=(a:number, b:number)=>a/b*3;

calculator.add1=(a:number, b:number)=>{
    return a+b;
}
console.log(calculator)


// console.log(calculator.divide(6,3));
// console.log(calculator.multi(5,6))
// console.log(calculator.add(),calculator.subtract());
console.log(calculator.add1(22,56));


interface houseAddress{
    Hounum:string
}

interface floors{
    noOfFloors:number,
    numOfRooms:number,
    attachWashrooms:number,
    numOfRoomsWithOutWashrooms:number,
    kitchen:number
}

interface House extends houseAddress, floors{
    Address:{
        country:string,
        province:string
        city:string,
        postalcode:number,
        phoneno?:number
    }
}


let house1:House = {
    Hounum:"D-37 Gulshan-e-Mehran phase ii",
    noOfFloors:1,
    numOfRooms:7,
    attachWashrooms:6,
    numOfRoomsWithOutWashrooms:1,
    kitchen:2,
    Address:{
        country:"Sindh",
        province:"Hyd",
        city:"Qasimabad",
        postalcode:234344,
        phoneno:3166679070
    }
    

}
console.log(house1)

console.log(house1.Address.phoneno)
