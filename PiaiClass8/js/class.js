"use strict";
// interface Calculator{ // class is blue print or template
//     x:number,
//     y:number,
//     add:()=>number
// }
// let Add:Calculator = {
//     x:40,
//     y:30,
//     add(){
//         return this.x + this.y;
//     }
// }
// let addTwice:Calculator = {
//     x:10,
//     y:20,
//     add(){
//         return this.x + this.y;
//     }
// }
// console.log(Add.add());
class Calculator {
    constructor() {
        this.x = 0; // Properties/States
        this.y = 0;
    }
    add() {
        return this.x + this.y;
    }
}
let add = new Calculator(); // Default constructor
add.x = 20,
    add.y = 30;
console.log(add.add());
class Car {
    constructor(Crname, Crmake, Crcolor, Crmodel) {
        this.name = Crname;
        this.make = Crmake;
        this.color = Crcolor;
        this.speed = 0;
        this.model = Crmodel;
    }
    start() {
        return this.speed = 10;
    }
    accelator() {
        return this.speed += 10;
    }
    stop() {
        return this.speed = 0;
    }
}
const Mehran = new Car("Mehran", "Toyota", "black", "2023");
let Civic = new Car("Civic", "Honda", "black", "2020");
console.log(Civic, Civic.start(), Civic.accelator(), Civic.accelator(), Civic.stop());
console.log(Mehran.start());
console.log(Mehran.accelator());
console.log(Mehran.accelator());
console.log(Mehran.stop());
class Fan {
    constructor(make, angularSpeed, color, price) {
        this.make = make;
        this.angularSpeed = angularSpeed;
        this.color = color;
        this.price = price;
    }
    start() {
        this.angularSpeed = 200;
        return "Angular speed of fan is " + this.angularSpeed + " rpm" + "\n";
    }
    angularAccleration() {
        this.angularSpeed += 200;
        return "Angular Accleration of fan is " + this.angularSpeed + " rpm" + "\n";
    }
    stop() {
        this.angularSpeed = 0;
        return "Fan is not moving, it means Angular speed of fan is " + this.angularSpeed + " rpm";
    }
}
let pakFan = new Fan("PAKFAN", 0, "white", 2400);
console.log(pakFan, pakFan.start(), pakFan.angularAccleration(), pakFan.stop());
