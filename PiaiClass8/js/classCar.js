"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(model, name, wheels, doors, color, speed, Vtype, make) {
        this.name = name;
        this.wheels = wheels;
        this.Vtype = Vtype;
        this.doors = doors;
        this.color = color;
        this.speed = 0;
        this.make = make;
        this.model = model;
    }
    start() {
        this.speed = 10;
        return this.speed;
    }
    accelerate() {
        this.speed += 10;
        return this.speed;
    }
    stop() {
        this.speed = 0;
        return this.speed;
    }
    printDetails() {
        console.log(this.name, this.Vtype);
    }
}
class Mehran extends Car {
    constructor(model, name, doors, color, Vtype, make) {
        super(model, name, 4, doors, color, 0, Vtype, "Mehran Suzuki");
    }
}
let mehran2023 = new Mehran("2023", "Mehran", 4, "black", "Petrol", "Mehran Suzuki");
console.log(mehran2023.start());
console.log(mehran2023.accelerate());
console.log(mehran2023.accelerate());
console.log(mehran2023.name);
class Cultus extends Car {
    constructor(doors, color, Vtype) {
        super("Cultus2030", "Cultus", doors, 4, color, 0, Vtype, "Cultus2020");
    }
    start() {
        this.speed = 20;
        return this.speed;
    }
    accelerate() {
        this.speed += 20;
        return this.speed;
    }
}
let cultus = new Cultus(4, "Black", "Electrical");
console.log(cultus, cultus.model, cultus.start(), cultus.color);
