"use strict";
// class Happy{
//     inside!:string;
//     outside!:string;
//     init(inside:string, outside:string){
//         this.inside = inside,
//         this.outside = outside
//     }
Object.defineProperty(exports, "__esModule", { value: true });
class mobile {
    constructor(name, price, broke) {
        this.name = name;
        this.price = price;
        this.broke = broke;
    }
    feature() {
        if (typeof this.broke === 'string') {
            console.log(this.name + " need to be Repair & for repairing price should be " + this.price);
        }
        else {
            console.log("not broken!!");
        }
    }
}
let mob = new mobile("Samsung", 5000, "Broken");
mob.feature();
