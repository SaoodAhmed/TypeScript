// private or Hash both are access modifiers both used with in class we can not acces
// properties outside of the class but, the different is Hash(#) is used in javscript as well as,
// typescript but, private used only in typescript but, it is possible to run it in javascript 

// static: it is used within class name so, no need to create object of class 
// & it is static or constant across the object 

class book{
    #name:string;
    protected static pages:number = 350;    // try private, protected
    price:number;

    constructor(name:string, price:number){
        this.#name = name;
        this.price = price;
    }

    provideKnowledge(){
        return "This "+this.#name+" gives knowlege about Hemokalaani";
    }

    static page(){
        return "total pages "+this.pages;
    }


}

class richDadAndPoorDad extends book{
    pages = book.pages+" pages";
    constructor(name:string, price:number){
        super(name,price);
    }
}


let sindhHero = new book("Sindh jo Hero",300);
// console.log(sindhHero.name, sindhHero.provideKnowledge());

let richDpoor:richDadAndPoorDad = new richDadAndPoorDad("Rich Dad & Poor Dad",250);
console.log(richDadAndPoorDad.page());


