"use strict";
class base {
    constructor() {
        this.name = "base";
        this.name = "base";
        console.log("This is " + this.name);
    }
}
class derived extends base {
    constructor() {
        super();
        this.name = "Derived";
        console.log("This is " + this.name);
    }
}
let intit = new derived();
intit.name;
