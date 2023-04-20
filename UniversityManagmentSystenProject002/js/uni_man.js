"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.course = [];
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.course.push(course);
    }
}
class Instructors extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse() {
        this.courses.push();
    }
}
class Course {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.student = [];
        this.Instructor = [];
    }
    addStudent() {
        this.student.push();
    }
    setInstructor() {
        this.Instructor.push();
    }
}
class department {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
}
let course1 = new Course(1, "Blockchain");
let saud = new Student("Saud", 23, 72);
console.log(saud.registerForCourse(course1));
