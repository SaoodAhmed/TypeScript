"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, gender) {
        this.noOfLegs = 2;
        this.noOfHands = 2;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    print() {
        console.log(this.name + ' is ' + this.age + ' years old, gender: ' + this.gender);
    }
}
class Teacher extends Person {
}
class Student extends Person {
}
class TSClass {
    constructor(teacher) {
        this.students = [];
        this.name = "Typescript";
        this.teacher = teacher;
    }
    register(student) {
        this.students.push(student);
    }
    print() {
        console.log(this.name + " is the course " + this.teacher.name + " is a class teacher");
        console.log(this.name + " is the course " + this.students.length + " students are registered in this course");
    }
}
let saud = new Teacher("Saud", 23, "Male");
saud.print();
let rafaquat = new Student("Rafaquat", 16, "Male");
rafaquat.print();
let zohaib = new Student("Zohaib", 13, "Male");
zohaib.print();
let barat = new Student("Barat", 20, "Male");
barat.print();
let tsClass = new TSClass(saud);
tsClass.register(rafaquat);
tsClass.register(barat);
tsClass.register(zohaib);
tsClass.print();
