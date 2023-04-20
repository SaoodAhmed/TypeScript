export{}

interface vehicle{
    name:string;
    wheels:number;
    Vtype:string;
    doors:number;
    color:string;
    speed:number;

    start():number;
    accelerate():number;
    stop():number;
}


class Car implements vehicle{
    name: string;
    wheels:number;
    Vtype:string;
    doors:number;
    color:string;
    speed:number;
    make:string;
    model:string;


    constructor(model:string,name:string, wheels:number, doors:number, color:string, speed:number, Vtype:string,make:string){
        this.name = name;
        this.wheels = wheels;
        this.Vtype = Vtype;
        this.doors = doors;
        this.color = color;
        this.speed = 0;
        this.make = make
        this.model  = model;
    }

    start(){

        this.speed = 10;
        return this.speed;
    }

    accelerate(): number {
        this.speed += 10;
        return this.speed
    }

    stop() {
        this.speed = 0;
        return this.speed;
    }

    printDetails(){
        console.log(this.name, this.Vtype)
    }
}

class Mehran extends Car{

    constructor(model:string,name:string, doors:number, color:string, Vtype:string,make:string){
        super(model,name, 4, doors, color,0,Vtype,"Mehran Suzuki")
    }


}

let mehran2023:Mehran = new Mehran("2023","Mehran",4,"black","Petrol","Mehran Suzuki");
console.log(mehran2023.start());
console.log(mehran2023.accelerate());
console.log(mehran2023.accelerate());
console.log(mehran2023.name);


class Cultus extends Car{
    constructor(doors:number, color:string, Vtype:string){
        super("Cultus2030","Cultus",doors,4,color,0,Vtype,"Cultus2020")
    }

    start(){
        this.speed = 20;
        return this.speed;
    }

    accelerate() {
        this.speed += 20;
        return this.speed;
    }

}

let cultus:Cultus = new Cultus(4, "Black", "Electrical");

console.log(cultus,cultus.model, cultus.start(),cultus.color);
