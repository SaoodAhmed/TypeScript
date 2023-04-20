class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getName():string {
        return this.name;
    }
}


class Student extends Person{
    rollNumber:number;
    course:Course[] = [];

    constructor(name:string, age:number,rollNumber:number){
        super(name, age);
        this.rollNumber = rollNumber;
    }

    registerForCourse(course:Course){
        this.course.push(course)
    }
}


class Instructors extends Person{
   salary: number;
   courses:[];

    constructor(name:string, age:number,salary:number){
        super(name, age)
        this.salary = salary;
        this.courses = [];
    }

    assignCourse(){
        this.courses.push()
    }

}


class Course{
    id:number;
    name:string;
    student:[];
    Instructor:[];

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
        this.student = [];
        this.Instructor = [];
    }

    addStudent(){
        this.student.push()
    }

    setInstructor(){
        this.Instructor.push()
    }
}

class department{
    name:string;
    courses:[];
    constructor(name:string){
        this.name = name;
        this.courses = [];
    }
}


let course1:Course = new Course(1,"Blockchain");
let saud:Student = new Student("Saud",23,72);

console.log(saud.registerForCourse(course1));

