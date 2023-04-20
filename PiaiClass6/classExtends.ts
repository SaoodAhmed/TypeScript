export{}


class Person{
    name:string;
    age:number;
    noOfLegs:number = 2;
    noOfHands:number = 2;
    gender:"Male"|"Female"|"Shemale";
    constructor(name:string, age:number, gender:"Male"|"Female"|"Shemale"){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }


    print(){
        console.log(this.name+' is '+this.age+' years old, gender: '+this.gender);

    }
}





class Teacher extends Person{

}

class Student extends Person{
    
}


class TSClass{
    students:Student[] = [];
    teacher:Teacher;
    readonly name:string = "Typescript";
    constructor(teacher:Teacher){
        this.teacher = teacher;
    }
    register(student:Student){
        this.students.push(student)

    }

    print(){
        console.log(this.name+" is the course "+this.teacher.name+" is a class teacher")
        console.log(this.name+" is the course "+this.students.length+" students are registered in this course");
    }



}




let saud = new Teacher("Saud",23,"Male");
saud.print();

let rafaquat = new Student("Rafaquat",16,"Male");
rafaquat.print();

let zohaib = new Student("Zohaib",13,"Male");
zohaib.print();


let barat = new Student("Barat",20,"Male");
barat.print();


let tsClass = new TSClass(saud)
tsClass.register(rafaquat);
tsClass.register(barat);
tsClass.register(zohaib);


tsClass.print();







