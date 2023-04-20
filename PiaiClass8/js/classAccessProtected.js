"use strict";
// private : it is used within the class
// protected : it is used within class or outside of that class who extend it
// public: it is used every where in the class
// internal : By default
class plasticChair {
    constructor(arms, back, price, color) {
        this.legs = 4;
        this.chairType = 'plastic Chair';
        this.arms = arms;
        this.back = back;
        this.price = price;
        this.color = color;
    }
    sit() {
        return "you can sit on " + this.chairType;
    }
    sleep() {
        return "you can sleep on " + this.chairType;
    }
}
let PlaChair = new plasticChair("One", true, 900, "black");
// PlaChair.chairType  // it gives error bcz in plasticChair class chairType is protected
console.log(PlaChair.sit());
class woodChair extends plasticChair {
    constructor(arms, back, price, color) {
        super(arms, back, price, color);
        this.chairType = "wooden Chair";
    }
}
let woodenChair = new woodChair("four", true, 1500, "light brown");
console.log(woodenChair.chairType); // in plasticChair class chairType is protected but, 
console.log(woodenChair.sit()); // woodChair class extend and can use it
