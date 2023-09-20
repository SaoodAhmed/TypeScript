// interface Car{
//     name:string,
//     model:number|null|undefined
// }

// interface Toyota extends Car{
//     engine:string,
//     volume:string
// }

// let Suzuki:Toyota = {
//     name:"Suzuki",
//     model:2023,
//     engine:"20cc",
//     volume:"30litr"
// }

// let Corolla:Toyota = {
//     name:"corolla",
//     model:undefined,
//     engine:'20CC',
//     volume:"20litr"

// }


export{}
interface Person{
    name:string,
    age:number|undefined|null
}

interface student extends Person{
    course:string,
    class:string
}

interface teacher extends Person{
    experienceInYears:number,
    course:string,
    academy:string
}

let saud:teacher = {
    name:"Saud Ahmed",
    age:24,
    experienceInYears:3,
    course:"All Subjects",
    academy:"Home Tutor"
}


let Saud:student = {
    name:"Saud Ahmed",
    age:null,
    class:"Final Year Software Engineering",
    course:"BlockChain"
}