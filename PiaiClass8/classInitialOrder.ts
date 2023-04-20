class base {
    name="base";
    constructor(){
        this.name = "base";
        console.log("This is "+this.name)
    }
}

class derived extends base {
    name:string;
    constructor(){
        super()
        this.name = "Derived";
        console.log("This is "+this.name)
    }
}
let intit:derived = new derived();
intit.name;

