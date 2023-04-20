"use strict";
class Whale {
    constructor(noOfFins, name) {
        this.noOfHands = 0;
        this.noOflegs = 0;
        this.name = name;
        this.noOfFins = noOfFins;
        this.type = "Mamel";
        this.waterType = "Salt";
    }
    print() {
        return "This is " + this.name;
    }
}
let mamel = new Whale(2, "Whale");
console.log(mamel, mamel.print());
class Animal {
    constructor(name, noOfHands, noOflegs, age) {
        this.name = name;
        this.noOfHands = noOfHands;
        this.noOflegs = noOflegs;
        this.age = age;
    }
    print() {
        return "this print the age  " + this.age;
    }
    show() {
        console.log("this shows the name of " + this.name);
    }
}
let cat = new Animal("Cat", 0, 4, 1 / 2);
console.log(cat.print());
console.log(cat.show());
// let lenovo:Lenovo = {
//     name:"Lenovo",
//     RAM:4,
//     ROM:250,
//     make:"Lenovo",
//     onn(){
//         return "it's onn"
//     },
//     off(){
//         return "it's off";
//     }
// }
// console.log(lenovo, lenovo.onn());
class Lenovo {
    constructor(name, RAM, ROM, make) {
        this.off = () => {
            return "now, my" + this.name + " is off";
        };
        this.name = name;
        this.RAM = RAM;
        this.ROM = ROM;
        this.make = make;
    }
    onn() {
        return "now my " + this.name + " is onn";
    }
    printDetails() {
        console.log(this.name, this.RAM, this.ROM, this.make);
    }
}
let len = new Lenovo("lenovo", 8, 300, "Lenovo");
len.printDetails();
