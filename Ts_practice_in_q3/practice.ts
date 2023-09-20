const noun:string = Math.random()>0.5?"Saud Ahmed":"Sarki";
console.log({noun})


const nam = noun.toUpperCase()
console.log({nam})


const num = 91.2342;
console.log(num.toPrecision(4))




// ##################################################Type Annotation







let book1:number|string|boolean

book1 = "Eshiq";
console.log(book1)








// ################################################## type alias

type book  = string|number|null;

let book2:book ;

book2 = "Ghadar"

console.log(book2)





type Flower = "Lily" | "AsmSa";

let flower:Flower;

flower = "AsmSa";

console.log(flower)



type Id = number|string;

let id1:Id = 72;
console.log(id1)






// ################################# Object Type





let AsmSa:{
    relation:string,
    duration:number|boolean|null|string,
    stillContinue:boolean,
}

AsmSa = {
    relation:"Love",
    duration:"Infinity",
    stillContinue:true
}

console.log(AsmSa,AsmSa.relation, )







let student  = {
    name:{
        firstName:"Saud",
        lastName:"Ahmed"
    },
    rollNo:72,
    age:23,
}

console.log(student.name.firstName)







// ############################# Alias Object Type






type person = {
    name:string,
    age:number,
    siblings:number
}

let person1: person =  {
    name:"Saud Ahmed",
    age:23,
    siblings:6
}





type Clock = {
    noOfNeedles?:number,
    hours:number,
    type:string,
}

let clock:Clock = {
    noOfNeedles:2,
    hours:12,
    type:"Hand-watch"
}
console.log(clock)



const studen = {
    name:"Saud",
    age:23,
    rollNo:72
}

studen.name = "Ahmed"

console.log(studen.name)




type firstAndLastName = {
    first:string,
    last:string
}

let hasBoth:firstAndLastName = {
    first:"Saud",
    last:"Ahmed"
}

// let firstName:firstAndLastName = {
//     first:"Saud Ahmed",
// }


type books = {
    author?:string,
    pages:number
}

let bok:books = {
    author:"Mustifa Nangraj",
    pages:234
}

let bok1:books = {
    pages:200
}





// ######################### Type checking






type PoemWithPages = {
    name:string,
    pages:number

}

type PoemWithRhyms = {
    name:string,
    rhyms:boolean
}



type Poem = PoemWithPages | PoemWithRhyms
let poem:Poem = Math.random()>0.5 ? {name:"Saud Ahmed",pages:233}:{name:"Saad", rhyms:true}

console.log(poem.name)

if("pages" in poem){
    console.log(poem.pages)

}else{
    console.log(poem.rhyms)
}





// #################################### Function and sread operators 




const allSongs = (singer:string, ...songs:string[])=>{
    console.log(`i am ${singer} here, i have sung these songs ${songs}`)
}
allSongs("Saud Ahmed", "Inqlab saa thyo","Hath m khani hithyar qalam ja ","Maa ba pehnji mulak m ahyan akelo")







const fruits = ["apple","pine apple","mango","orange"]

fruits.forEach((fruit,index)=>{
    console.log(`${fruit} ${index}`)
})





type NumberToString = (input:number)=>string;

const useNumberToString = (numberToString:NumberToString)=>{
    console.log(`the string is: ${numberToString(234)}` )
}

useNumberToString((input)=>`${input}! Number arrived!`)





const raiseError = (message:string):never=>{
    throw new Error(message)
}
raiseError("Error")




const Deshi = ["Saud Ahmed Sarki", "Shaheed Bashir Khan Qureshi","Shaheed Muzafir Bhutto", "Shaheed Afzal Luand"]

const age = [23,20, 40, 35]

const joinded = [
    [...Deshi], 
    [...age]
]

console.log(joinded[1][2])



const Wellcome = (greeting:string, ...names:(number|string)[])=>{
    for(const name of names){
        console.log(`${greeting} ${name}`)
    }

}

const warriors = ["Saud Ahmed", "Rashid", "AsmSa"]
Wellcome("Namisty",...warriors)

const Yold = [23,21,30]
Wellcome("I am ",...Yold)









// ################################ Tuples 




const Person = (name:string, age:number)=>{
    console.log(`My name is ${name} & i'm ${age} years old..!!`)
}

const pairOfTuplesIncorrect:[number,string] = [23,"Saud Ahmed"]



//Person(...pairOfTuplesIncorrect)
//Error:Argument of type 'number' is not assignable to parameter of type 'string'.


const pairOfTuplesCorrect:[string,number] = ["Saud Ahmed",23]
Person(...pairOfTuplesCorrect) //0k



const pairArray = ["Saud Ahmed",23]

//Person(...pairArray)
//Error:A spread argument must either have a tuple type or be passed to a rest parameter.
