"use strict";
// export{}
// interface Poet {
//     name:string;
//     born:number;
//     type?:'Poet'|'Writer'
//     method():string;   // we can not make this function as a readOnly 
//     propertyMethod?:(poet:Poet)=>string;  // we can apply here a readOnly property
//     // addTwoNumber?:(a:number, b:number)=>number;
// }
// let Aamar:Poet;
// Aamar = {
//     name:"Aamar Jaleel",
//     born:1940,
//     type:"Writer",
//     method(){
//         return "The great "+this.type+" "+this.name+" born at "+this.born;
//     },
//     propertyMethod:(poet:Poet)=>{
//         return "The great "+poet.type+" "+poet.name+" born at "+poet.born;
//     },
//     //addTwoNumber:(a,b)=>a+b
// }
// let Latif:Poet = {
//     name:"Shah Abdul Latif Sarkar",
//     born:1700,
//     type:"Poet",
//     method(){
//         return "The great "+this.type+" "+this.name+" born at "+this.born;
//     }
// }
// printDetail(Latif);
// printDetail(Aamar);
// function printDetail(poet:Poet){
//     console.log(poet.method())
//     if(poet.propertyMethod!==undefined){
//         console.log(poet.propertyMethod(poet))
//     }
// }
// interface calc{
//     left:number,
//     right:number,
//     add():number; 
//     mult:(a:number, b:number)=>number;
// }
// let calculator:calc = {
//     left:4,
//     right:5,
//     add(){
//         return this.left + this.right;
//     },
//     mult:(a,b)=>a*b
// }
// console.log(calculator.add(),calculator.mult(3,2));
// interface Car{
//     name:string,
//     model:number,
//     breaks:string,
//     break():string,
//     accelator:(speed:number)=>number;
// }
// let Mehran:Car={
//     name:"Mehran",
//     model:2023,
//     breaks:'stop',
//     break(){
//         return this.breaks
//     },
//     accelator:(speed)=>speed*speed
// }
// if(Mehran.accelator(4)>20){
//     console.log(Mehran.accelator(5))
// }else{
//     console.log(Mehran.break());
// }
