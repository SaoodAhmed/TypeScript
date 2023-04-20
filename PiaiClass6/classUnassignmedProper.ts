// class Happy{
//     inside!:string;
//     outside!:string;
//     init(inside:string, outside:string){
//         this.inside = inside,
//         this.outside = outside
//     }

//     showDetails(){
//         console.log(this.inside, this.outside)
//     }
// }

// let happ = new Happy();
// happ.init("Sad","Happy");

// happ.showDetails();
export{}
class mobile{
    name:string;
    price:number;
    broke?:string;
    
    constructor(name:string, price:number, broke?:string){
        this.name = name;
        this.price = price;
        this.broke = broke;
    }
    feature(){
        if(typeof this.broke==='string'){
            console.log(this.name+" need to be Repair & for repairing price should be "+this.price)
        }else{
            console.log("not broken!!")
        }


    }
        
}

let mob = new mobile("Samsung",5000,"Broken")
mob.feature();




