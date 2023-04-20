interface Species{
    name:string;
    noOfHands:number;
    noOflegs:number;
    print():string;
}

interface seaSpecies{
    noOfFins:number;
    waterType:"Salt"|"River";
    type:"Mamel"|"fish";
}

class Whale implements Species, seaSpecies{
    noOfFins: number;
    waterType:"Salt"|"River";
    type:"Mamel"|"fish";
    noOfHands:number = 0;
    noOflegs:number = 0;
    name:string;

    constructor(noOfFins:number, name:string,){

        this.name = name;
        this.noOfFins = noOfFins;
        this.type = "Mamel";
        this.waterType = "Salt";

    }

    print() {
        return "This is "+this.name
    }
}

let mamel:Whale = new Whale(2, "Whale");
console.log(mamel, mamel.print() )





class Animal implements Species{
    // interface properties
    name:string;
    noOfHands: number;
    noOflegs:number;
    age:number; // additional property

    constructor(name:string, noOfHands:number, noOflegs:number, age:number){
        this.name = name;
        this.noOfHands = noOfHands;
        this.noOflegs = noOflegs;
        this.age = age;

    }

    print(){
        return "this print the age  "+this.age;
    }

    show(){
        console.log("this shows the name of "+this.name)
    }

}

let cat:Animal = new Animal("Cat", 0, 4, 1/2);
console.log(cat.print())
console.log(cat.show())













interface Laptop{
    name:string;
    RAM:number;
    ROM:number;

    onn():string;
    off():string;
}

interface Lenovo extends Laptop{
    make:string;
}


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



class Lenovo implements Laptop{
    name:string;
    RAM:number;
    ROM:number;
    make:string;

    constructor(name:string, RAM:number, ROM:number, make:string){

        this.name = name;
        this.RAM = RAM;
        this.ROM = ROM;
        this.make = make;

    }

    onn(){
        return "now my "+this.name+" is onn"
    }

    off = ()=> {
        return "now, my"+this.name+" is off"
    }

    printDetails(){
        console.log(this.name, this.RAM, this.ROM, this.make);
    }
    
}

let len:Lenovo = new Lenovo("lenovo",8,300,"Lenovo");

len.printDetails()




