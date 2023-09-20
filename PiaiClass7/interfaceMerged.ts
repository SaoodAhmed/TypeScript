interface Person{
    name:string,
    age:number
}
interface Person{
    gender:string,
    martialStatus:string
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
    academy:"Home Tutor",
    gender:"Male",
    martialStatus:"Unmarried"
}

let Saud:student = {
    name:"Saud Ahmed",
    age:24,
    class:"Final Year Software Engineering",
    course:"BlockChain",
    gender:"Male",
    martialStatus:"Unmarried"
}





