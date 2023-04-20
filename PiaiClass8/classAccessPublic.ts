// private : it is used within the class
// protected : it is used within class or outside of that class who extend it
// public: it is used every where in the class
// internal : By default


export{}

interface chair{
    legs:number;
    arms:string;
    back:boolean;
    price:number;
    color:string;

    sit():string;

}

class plasticChair implements chair{
    legs:number;
    arms:string;
    back:boolean;
    price:number;
    color:string;
    public chairType:string;
    constructor(arms:string, back:boolean, price:number, color:string){
        this.legs = 4;
        this.chairType = 'plastic Chair';
        this.arms = arms;
        this.back = back;
        this.price = price;
        this.color = color;

        
    }

    sit(){
        return "you can sit on "+this.chairType;
    }

    sleep(){
        return "you can sleep on "+this.chairType
    }  

}

let PlaChair:plasticChair = new plasticChair("One",true, 900, "black");
PlaChair.chairType  
console.log(PlaChair.sit())

class woodChair extends plasticChair{
    chairType = "wooden Chair";
    constructor(arms:string,back:boolean,price:number,color:string){
        super(arms,back,price,color)
    }
}

let woodenChair:woodChair = new woodChair("four",true, 1500,"light brown");
console.log(woodenChair.chairType); 
console.log(woodenChair.sit())             

