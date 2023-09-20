// Differences between Type Aliases and Interfaces:

// Interfaces can extend other interfaces using the extends keyword.
// Interfaces can be implemented by classes using the implements keyword.
// Type aliases cannot extend other types or be implemented by classes.



// ######################################### Optional Properties



type CarAliasType = {
    name:string,
    wheels:number
}

const CarAlias:CarAliasType = {
    name:"Mehran",
    wheels:4
}

console.log(CarAlias)








interface CarInterface{
    name:string,
    wheels:number
    seatBealt?:boolean
}



const CarInter:CarInterface = {
    name:"Corolla",
    wheels:4,
    seatBealt:true
}

console.log(CarInter)


const CarInter1:CarInterface = {
    name:"Suzuki",
    wheels:4,
}

console.log(CarInter1)





// ################################################ ReadOnly Properties



interface Philosopher{
    name:string,
    readonly age:number,
    type:"Writter"|"Poet",
}

let person:Philosopher = {
    name: "Saud Ahmed",
    age: 23,
    type: "Poet",
}
console.log(person.type)
// person.age = 50   // Error: Cannot assign to 'age' because it is a read-only property
person.type = "Writter"

console.log(person.type)






interface Fan{
    madeBy:string,
    noOFBlades:number,
    winding:"Copper"|"Silver",
    rpm?:number
}

let fan1:Fan = {
    madeBy:"Pakistan",
    noOFBlades:4,
    winding:"Copper",
    rpm:500
};

fan1.madeBy = "Sindh"

const FanFunc = (fan:Fan)=>{
    console.log(fan.madeBy)
}

FanFunc(fan1)







// //################################################ Method and Functions


interface MethodAndPropertyMethod{
    readonly left:number,
    right:number,
    MethodAdd(a:number, b:number):number // never be readOnly
    readonly PropMethodDivid:(x:number, y:number)=>number; //It can be readOnly Property but return diff; value

}

let methodAndProp:MethodAndPropertyMethod = {
    left:5,
    right:34,
    MethodAdd(a,b){
        return this.left + this.right;
    },
    PropMethodDivid:(x,y)=>x/y  // We cann't use left & right properties here, using this keyword
}
// methodAndProp.left = 6   // Error: Cannot assign to 'left' because it is a read-only property.
console.log(methodAndProp.MethodAdd(34,45), methodAndProp.PropMethodDivid(30,5))
console.log(methodAndProp.PropMethodDivid(45,34))




interface Philosoph{
    name:string,
    born?:number,
    type:"Writter"|"Poet"
    method():string,
    propertyMethod:(philosopher:Philosoph)=>string,
}

let person3:Philosoph = {
    name: "Mustifa Nangraj",
    born: 1974,
    type: "Writter",
    method() {
        return `The great ${this.type} ${this.name} was born in ${this.born}  `
    },
    propertyMethod: (philosopher) => `${philosopher.name} was born in ${philosopher.born}`
}
console.log(person3.method(), person3.propertyMethod(person3))
console.log(person3.propertyMethod(person3))







//##################################### Call Signatures


interface Calculator {
    method(left:number, right:number):number
}

let addition:Calculator = {
    method(left,right){
        return left + right
    }
}

let Multiplictaion:Calculator = {
    method(left,right){
        return left * right;
    }
}

console.log(addition.method(4,5))
console.log(Multiplictaion.method(4,5))




interface PersonalCalculator {
    (a:number, b:number):number;
}

let myAdd:PersonalCalculator =(a,b)=>a+b;
let mySub:PersonalCalculator = (a:number,b)=>a-b
let myMult:PersonalCalculator = (a:number,b:number)=>a*b;
let Divide:PersonalCalculator = (a,b)=>a/b;


console.log(myAdd(2,4))
console.log(myMult(2,4))
console.log(Divide(2,4))



interface calcu{
    result:number,
    (a:number,b:number):void
}

let calculat:calcu


function math(a:number,b:number){
    math.result =  a-b;
    console.log("Result is: ",math.result)
}
math.result = 0
calculat = math
calculat(5,4)


// let storeInResult:calcu = {
//     result:0,
//     xyz(a,b){
//         this.result = a*b;
//         console.log("Result is: ",this.result)
//     }
// }









//######################################################### Index Signatures




interface Door {
    [i:string]:number|string

}

let door1:Door = {
    color:"Gray",
    height:3,
    width:0.5,
    madeBy:"pakistan"

}

console.log(door1)



interface SoftwareHouse{
    [i:string]:number|string
}


let mySoftwareHouse:SoftwareHouse = {
    name:"AsmSa",
    members:"50K",
    location:"virtual",
    reactDevelopers:20000,
    SQA:"teams"
}

console.log(mySoftwareHouse)



interface WordCount {
    [i:string]:number
}

let fruitCount:WordCount = {}

fruitCount.apple = 4
fruitCount.mango = 12
fruitCount.organge;

console.log(fruitCount.organge)




interface DatesByName {
[i: string]: Date;
}
const publishDates: DatesByName = {
Frankenstein: new Date("1 January 1818"),
};
//publishDates.Frankenstein; // Type: Date
console.log(publishDates.Frankenstein.toString()); // Ok
// publishDates.Beloved; // Type: Date, but runtime value of undefined!
// console.log(publishDates.Beloved.toString());







//############################################## Mixing properties and index signatures

interface novels {
    Kreuzer_Sonata:1828,
    [i:string]:number
}

let myNovel:novels = {
    Kreuzer_Sonata: 1828,
    Tawaif:1886
}

// let myNovel1:novels = {   // Property 'Kreuzer_Sonata' is missing in type
//     Gaddar:1968,

// }

console.log(myNovel)












// ######################################################## Numeric index signatures



interface moreNarrowNumbers{
    [i:number]:string,
    [i:string]:string|undefined
}

const mixesStringAndNumbers:moreNarrowNumbers = {
    1:"Hi!",
    2:"I Love You!",
    str:"string",
    und:undefined
}

console.log(mixesStringAndNumbers)



// interface moreNarrowStrings{
//     [i:number]:string|undefined,  // Error: 'number' index type 'string | undefined' is not assignable to 'string' index type 'string'.
//     [i:string]:string

// }



//################################################ Nested Interfaces



interface novel{
    author:{
        name:string
    },
    setting:Setting

}

interface Setting{
    year:number,
    place:string
}

const EshaqNovel:novel = {
    author:{
        name:"Mustifa Nangraj"
    },
    setting:{
        year:1965,
        place:"TandoJam"
    }

}

console.log(EshaqNovel)





// ######################################################## Interface Extensions



interface Animals{
    name:string,
    type:string,
    legs?:number
}

interface Vertibrate extends Animals{
    livingDuration:number,
    livingOn:string,
    weightLimit:number
}


let myAnimal:Vertibrate = {
    name:"Buffalo",
    type:"mammals",
    legs:4,
    livingDuration:40,
    livingOn:"Land",
    weightLimit:600
}
console.log(myAnimal)




//##########################################################Interface Merging




interface Person{
    name:string,
    age:number
}

interface Person{
    martialStatus:string,
    gender:string
}

interface Student extends Person {
    rollNo:number,
    class:string,
    course:string
}


interface Teacher extends Person{
    id:number,
    course:string,
    academy:string,
    experienceInYears:number
}


let Saad:Teacher = {
    id:72,
    name:"Saud Ahmed",
    age:23,
    gender:"Male",
    martialStatus:"Married",
    course:"Typescript Coding",
    academy:"AsmSa",
    experienceInYears:4 ,

}


let Saood:Student = {
    rollNo:72,
    name:"Saud Ahmed",
    age:23,
    martialStatus:"Unmarried",
    gender:"Male",
    class:"Software Engineering",
    course:"typescript coding"
}


console.log(Saad , Saood)









