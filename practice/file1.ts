export{}

// const a = "Hi!";

// const b = a.concat(" Saud")
// const c = a.charAt(0);
// const d = a.indexOf("i")
// const e = a.charCodeAt(0);



// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)




// const str = "i love u guys!!";

// console.log({str});



// let rocker = "Falak Sheer!!";
// console.log(rocker.toUpperCase());


// let num = 23434;

// console.log(num.toPrecision().concat("2"));


// console.log(2+ +"1")



// let a;
// a = "Hi";
// a = 2
// a = true;



// let var1 =  Math.random() > 0.5 ? "Allah ahein tun hi tun muhnjo":24;

// if(var1==="Allah ahein tun hi tun"){
//     console.log(var1.toUpperCase())
// }

// // var1.toUpperCase(); error



const lit = "Dinner";

let lit1:"Dinner"|number;


lit1 = 45; // OK

// lit1 = "lunch"    // error;

lit1 = "Dinner";



type flower = string|boolean;

let flower1:flower = true;
let flower2:flower = "Rose";


type food = "Briyani"|"White Karahi";
let foodInLunch:food = "Briyani";
// let foodInDinner:food = "Sindhi Biryani"    // error



type Id = string|number;

type IdMayBe = Id|undefined|null;

let id:IdMayBe = "72";


// Object Type**************************


// let Car:{
//     name:string;
//     model:number;
//     price:number;
//     weight:number;
//     color:string;
//     carSwitch:string|undefined
//     start():void;
//     //stop():void;
//     // drive():string;
//     brake ?: (carBrake:string)=>string;
// }


// let car1 = Car = {
//     name:"Mehran",
//     model:2000,
//     weight:500,
//     price:2000000,
//     color:"black",
//     carSwitch:'switch onn',
//     start(){
//         if(this.carSwitch === 'switch onn'){
//             console.log("Car started")

//         }else {
//             console.log("switch off")
//         }
//     },
//     brake(carBrake:string){
//        if(carBrake === 'jumper'){
//         return "jumper"
//        }else{
//         return "not a jumper"
//        }
//     }

// }

// car1.brake('');
// car1.start();

let employee:{
    name:string;
    id:number;
    department:string;
} = {
    name:"Asad",
    id:3,
    department:"IT"
}

console.log(employee)


const cap = {
    price:200,
    color:"Black"
}
cap.color = "Red";

// cap.color = 123  // error


let lightBulb:{
    bulbType:string;
    lightColors:string;
    price:number;
    size:string;
}

lightBulb = {bulbType:"Saver",lightColors:"white", price:200, size:"medium/normal"}
// lightBulb = "Red bulb";  // error;



// *************** alias Type Objects
type poet = {name:string, birthDay:number}

let newPoet: poet;

newPoet = {
    name:"Saud",
    birthDay:1998
}

console.log(newPoet);




type poem = {
    name:{fname:string, lname:string},
    poetry:string
}

let poem1:poem = {
    name:{fname:"Saud Ahmed", lname:"Sarki"},
    poetry:"poetry_name"
}


type poemWithPages = {
    name:string;
    pages:number;
}

type poemWithRhyms = {
    name:string;
    rhyms:boolean

}


type poems = poemWithPages | poemWithRhyms;

let varr:poems = Math.random()>0.5? {name:"Ghar jo rang", pages:20} : {name:"Ghar jo rang",rhyms:true}

console.log(varr.name)



type lowRain = {
    flood:number|boolean;
    location:string;
} 


type highRain = {
    flood:string;
    rain_mm:number;
}

type Rain = lowRain | highRain

let varr1:Rain = {
    flood:true, location:"hyd", rain_mm:100
}
console.log(varr1.flood);



type fruit=string | boolean;

let fruit1:fruit = "mango";
console.log(fruit1)



type book = {
    name:string,
    price:number
}

type bookAuthor = {
    name:string,
    dob:string;
    
}

let Book:book & bookAuthor = {name:"Jien Ditho ahy mo",price:250, dob:"june-23"}

console.log(Book.name, Book.price, Book.dob)



type shortPoemBase = {author:string}
type Halku = shortPoemBase & {kigo:string; literal:"halku"}
type villanelle = shortPoemBase & {meter:number, literal:"villanelle"}
let oneArt:Halku | villanelle = {
    // author:"xyz",
    // kigo:"Hi",
    // literal:"halku",
    author:"xyz",
    meter:343,
    literal:"villanelle"

}

type mbl = {
    price?:number;
    name:string;
}

let mbile1:mbl = {
    name:"Vivo"
}


let poem = Math.random()>.05?{name:"Pro", pages:234}:{name:"coding", rhyms:true}
console.log(typeof poem.name);
console.log(typeof poem.pages);
console.log(typeof poem.rhyms);


// functions


// function song(first:string, second?:string){
//     console.log(first,second)
// }

// song("hal muhnja keer","dil je veeran rinn ty");
// song("tuhnji yad ji");

// let song1 = (first:string, second?:string)=>{
//     console.log(first,second)

// }

// song1("hal mu hnja keer","dil je veeran rinn ty");

// function Person(name:string, age = 0){
//     if(age>=0 && age<=70){
//         console.log(`${name} is ${age} years old`)
//     }else{
//         console.log("not possible");
//     }
// }
// Person("Tufail");

// **************************************Spread operator/Rest operator with Arrow function

function spreadOrRest(person:string, ...Wives:string[]){
    for(const wife of Wives){
        console.log(`${wife} is married with ${person}`)
    }
}
spreadOrRest("Tufail", "Ayesha", "Alia", "Reshma");


let singAllSongs = (singer:string, ...songs:string[])=>{
    for(const song of songs){
        console.log(`${song}, by ${singer}`)
    }


}
singAllSongs("Tufail Sanjrani","Jogi jogi m jogi","sajan khy chaw sikk dadhi lagi aa");



const sortingArray = (...num:number[])=>{
    console.log(num.sort())


}

sortingArray(1,5,9,2,4,7,3);


const findSum = (...num:number[]):number=>{
    let sum = 0;
    num.forEach((num)=>{
        sum = num+sum;
    });
    return sum;
}
console.log(findSum(1,2,3));


// **********************Explict Retrun types

let getSong = (song:string):Date|undefined=>{
    switch(song){
        case "Asan roi roi":
            return new Date('May 20, 1970');
        case "Dushman dost ma peda aksar yar thendo aa":
            return new Date();
        default:
            return undefined;
    }
}
console.log(getSong(""));


// *******************************function types


type calculator = (left:number, right:number)=>number;

let addition:calculator = (left,right)=>{
    return left + right;
}
let subtraction:calculator = (left, right)=>{
    return left - right;
}

let multiplication:calculator = (left,right)=>{
    return left*right;
}

let division:calculator = (left,right)=>{
    return left/right
}


console.log(addition(2,5));
console.log(multiplication(3,5));
console.log(division(9,2));







export{}
// let res:number|string|boolean;

// function doAdd(left?:any, right?:any){
//     if(typeof left === 'undefined' || right === 'undefined'){
//         return;
    
//     }else if(typeof left==='number' && typeof right==='number'){
//         res = left+right;
        
//     }else{
//         res = 'str'
        
//     }
// }

// doAdd()
// console.log(res);
// doAdd(3,5);
// console.log(res);
// doAdd("3");
// console.log(res)




// const songs = ["Juice", "Shake It Off", "What's Up"];
// function runOnSongs(getSongAt: (index: number) => string) {
//     for (let i = 0; i < songs.length; i += 1) {
//         console.log(getSongAt(i));
//     }
// }

// function getSongAt(index: number) {
// return `${songs[index]}`;
// }

// runOnSongs(getSongAt);

// *****************arrays defination

let animal:string[] = ["animal class","name","legs"];
let person = ["name","age", 2,true];
// let arr:[number,string, boolean] = [2,"programmer",false,2];
let ferniture:Array<string> = ["size","ferniture base","price"];



// ***************** Array of function types
// let tables:()=>number[];
// tables=()=>{
//     return [2,4,5,9]
// }
// console.log(tables());



// let tab=()=>[2,4,5,6];
// console.log(tab());

// let result = tab();
// result.push(3);
// console.log(result);





// let inputAndOutput = (songs:string[])=>{
    
//     return songs.forEach(song => {
//         console.log(`${song} ${count+1}`)
       
//     });

// }
// console.log(inputAndOutput(["s1","s2","s3"]));




// **************** Array of Union


let arr = [
    5,
    2,
    [3,2,1,"string"],
    true
]

console.log(arr[2]);




let arr1:(string|number)[]; 
arr1 = [2,3,1,"string"];



// let arr2:(number|string[])[];
// arr2 = [ 2,4,5,['str1','str2'],4,2,["str3","str4"]];
// console.log(arr2);

// let arr3:number[][] = [
//     [1,2,3,4,5],
//     [6,7,8,9,7],
//     [5,2,3,4,6]
// ]
// console.log(arr3[1][3]);
// arr3.push([3,9,2,1,5]);
// console.log(arr3)





// let a = [];
// a.push(9);
// a[0] = 23;
// console.log(a);



// ************************restOperator/spread operator

let sum:(...n:number[])=>number;

sum = (...n:number[])=>{
    return n.reduce((totalSum, num)=>totalSum + num)
}

console.log(sum(2,3,4,5,3,7))


// ********************Spread operator

let student:(string|number)[] = ["student id","name","age",2,]
let country:Array<string> = ["Sindh","Canada","UAE"];
let fern:[string,string,number,string,boolean] = ["table","chair",4,"bed",true]


let stdCount = [...student,country];
let coutrFern = [...country, ...fern]
console.log(stdCount);
console.log(coutrFern)






// let mult = (a:number, b:number):number=>{
//     return a*b;
// }

// console.log(mult(3,5));

// let nos:[number,number] = [3,9];
// console.log(mult(...nos));






let add = (left:number, right:number)=>{
    return left + right;
}

let numb:[number,number][] = [
    [3,5],
    [6,8],
    [7,8]
]

let show = (numb:[number,number][])=>{
    return numb.forEach(sum=>{
        console.log(add(...sum))
    })
}

show(numb)



let toAdd = function(left:number, right:number):[string, number]{
    return ['sum of', left + right]
}
console.log(toAdd(5,6))
