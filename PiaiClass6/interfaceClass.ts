
export{} 

interface species{  // properties defined in interface always public
    noOfHands:number;
    noOfLegs:number;
    print():void;
}

interface seaSpecies{
    noOfFins:number;
    waterType:"Salt"|"River"|null;
    Type:"mammals"|"fishes";
}


interface animal extends species, seaSpecies{
    name:string;
}

class whale implements animal{
    name: string;
    noOfFins:number;
    waterType:"Salt"|"River"|null;
    Type:"mammals"|"fishes";
    noOfLegs:number = 0;
    noOfHands:number= 0;


    constructor(name:string, fins:number,water:"Salt"|"River"|null,Type:"mammals"|"fishes"){
        this.name = name;
        this.noOfFins = fins;
        this.waterType = water;
        this.Type = Type;

    }

    print(): void {
        console.log("this is a class of whale: "+this.name)
    }
}

new whale("Blue Whale",2,"Salt","mammals").print();




class Animal implements species,seaSpecies{
    noOfHands: number;
    noOfLegs:number;
    name:string;
    skinType:string; // this is the class property
    noOfFins:number;
    waterType:"Salt"|"River"|null;
    Type:"mammals"|"fishes";
    constructor(name:string, noOfLegs:number, noOfHands:number,fins:number,water:"Salt"|"River"|null, Type:"mammals"|"fishes"){
        this.name = name;
        this.noOfLegs = noOfHands;
        this.noOfHands = noOfHands 
        this.skinType = "furr"
        this.noOfFins = fins;
        this.waterType = water;
        this.Type = Type;
    }

    print(){
        console.log("this is animal class "+this.name)
    }
    showAnimal(){ // class property
        console.log("this is show animal method defined in class"+this.name)
    }

}

new Animal("cat-fish",0,0,2,"Salt","fishes").print();
new Animal(" dog", 4,0,0,null,"mammals").showAnimal();




class Person implements species{
    public name: string;   // it's iterface property must be public bcz in interface properties defined as, public
    private age:number; // class property; it can be public or private
    public noOfLegs = 2; 
    public noOfHands = 2;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    print() {
        console.log("name: "+this.name+", age: "+this.age+", legs: "+this.noOfLegs+", Hands: "+this.noOfHands)
        
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


