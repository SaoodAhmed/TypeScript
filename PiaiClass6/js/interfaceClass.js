"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class whale {
    constructor(name, fins, water, Type) {
        this.noOfLegs = 0;
        this.noOfHands = 0;
        this.name = name;
        this.noOfFins = fins;
        this.waterType = water;
        this.Type = Type;
    }
    print() {
        console.log("this is a class of whale: " + this.name);
    }
}
new whale("Blue Whale", 2, "Salt", "mammals").print();
class Animal {
    constructor(name, noOfLegs, noOfHands, fins, water, Type) {
        this.name = name;
        this.noOfLegs = noOfHands;
        this.noOfHands = noOfHands;
        this.skinType = "furr";
        this.noOfFins = fins;
        this.waterType = water;
        this.Type = Type;
    }
    print() {
        console.log("this is animal class " + this.name);
    }
    showAnimal() {
        console.log("this is show animal method defined in class" + this.name);
    }
}
new Animal("cat-fish", 0, 0, 2, "Salt", "fishes").print();
new Animal(" dog", 4, 0, 0, null, "mammals").showAnimal();
class Person {
    constructor(name, age) {
        this.noOfLegs = 2;
        this.noOfHands = 2;
        this.name = name;
        this.age = age;
    }
    print() {
        console.log("name: " + this.name + ", age: " + this.age + ", legs: " + this.noOfLegs + ", Hands: " + this.noOfHands);
    }
}
new Person("Saud Ahmed", 23).print();
// interface hotel{   // interface used to define properties publicly not privately
//     name:string,
//     address:string;
//     openClose():string;
// }  
// class Food implements hotel{
//     public name:string; // error when we make it private bcz interface properties are always publicly defined
//     public address:string;
//     private foodType:string;
//     private lunchPrice:number;
//     private simpleBreakFastPrice?:number;
//     openClose(){
//         return ("Hotel open at 9:00 am or close at 10:00 pm");
//     }
//     constructor(){
//         this.name = "xyz hotel, ";
//         this.address = " Address1, ";
//         this.foodType = " chicken briyani, sindhi briyani, chicken mutton etc ";
//         this.lunchPrice = 150;
//     }
//     showDetails() {
//         console.log("it's my hotel details: "+this.name+this.address+this.openClose());
//     }
// }
// let myhotel = new Food();
// myhotel.showDetails()
