//type calculator = (left:number, right:number)=>number;

interface calculator{
    (left:number, right:number):number;
}

let add:calculator = (left:number,right:number)=>left+right;
let subt:calculator = (left:number, right:number)=>left-right;
let multiply:calculator = (left:number, right:number)=>left*right;
let div:calculator = (left:number, right:number)=>left/right

console.log(add(5,6));
console.log(subt(9,4));
console.log(multiply(8,2));
console.log(div(7,2));



interface calc{
    result:number;
    (a:number, b:number):void;
}

let calculator:calc;


// let calculator:calc = {
//     result:0,
//     abc(a,b){
//         this.result = a-b;
//         console.log("result is "+this.result)
//     }
// }
// calculator.abc(8,7);






function maths(a:number, b:number){
    maths.result = a-b;
    console.log("result is: "+maths.result)
}
maths.result = 0;
calculator = maths;
calculator(4,6);
