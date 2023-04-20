"use strict";
class dog {
    constructor(species, age) {
        this.species = species;
        this.age = age;
    }
    showDetails() {
        this.age = 12;
        // this.species = "sdfsd"   // error bcz readOnly property(cann't be changed)
        console.log(this.age, this.species);
    }
}
let adog = new dog("dol", 21);
adog.showDetails();
let bdog = new dog("easd", 26);
bdog.showDetails();
