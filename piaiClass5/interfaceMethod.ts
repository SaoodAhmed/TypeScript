// interface calc{
//     left:number,
//     right:number,
//     add():number, // method it use the context(this) of object
//     subtract():number, // method
//     multipl:(a:number, b:number)=>number; // property function type it don't use context(this) of object
//     add1?:(a:number, b:number)=>number; //it don't rely on this keyword so, much have prameters
// }

// let calcultor:calc = {
//     left:4,
//     right:3,
//     add(){
//         return this.left+this.right;
//     },
//     subtract(){
//         return this.left-this.right;
//     },
//     multipl:(a,b)=>a*b

//     //add1:()=>this.left+this.right; //error it has it's own contextual meaning defined in its own scope not in object scope
// }
// calcultor.left = 22;
// calcultor.right = 33;
// calcultor['left'] = 345;

// console.log(calcultor.add(),calcultor.subtract());
// console.log(calcultor.multipl(5,6));



// interface Car{
//     model:string,
//     name(price:number):string,
//     acclerate:(speed:number)=>string
// }

// let car:Car = {
//     model:"2022",
//     name(price){
//         if(price<1000000){
//             return "Merhan" + this.model;
//         }else{
//             return "Corolla"
//         }
//     },
//     acclerate:(speed)=>{
//         if(speed<=20){
//             return "not in danger";
//         }else{
//             return "in danger";
//         }

//     }
// }

// console.log(car.model, car.acclerate(30));
// console.log(car.name(30000000));