export{}

// *************Method-1**************


// function toCapital(var1:string){
//     console.log(var1.toUpperCase())
// }
// toCapital('i love u ..!!');


// ****************Method-2************

// let waterCollar = (capacity:number): string => {
//     if(capacity<=8){
//         if(capacity < 5){
//             let notFull = "still, water collar not full";
//             return notFull;
//         }else{
//             let full = "water collar is full of water!!"
//             return full;
//         }
//     }else{
//         let overFlows = "now, water over flows";
//         return overFlows;
//     }

// }
// console.log(waterCollar(9));

// *******************Mehtod-3**************

// let subject =  (sub:string, topic:string) => console.log("Subject is "+sub, "& topic is " +topic);
// subject("physics", "Vector");



// **************** Explict functions Method-4 *************


// function returntype1(){ // incorrect Explict function
//     return "any";
// }

// function returntype2():void{
//     return;
// }

// function returntype3():string{
//     return "only string";

// }

// function returntype4():string|boolean{
//     return "return string boolean";
// }


// function add(num1:number|string, num2:number|string):string|number {
//     if (typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;

//     }else{
//         return num1 + " "+ num2;
//     }
// }
// console.log(add(4, '7'));


// let func_name1 = (num1:number, text:string):string|number => {
//     if(num1<5){
//         return num1;
//     }else{
//         return text";
//     }
// }
// console.log(func_name1(6, "pro"));



type table = {
    color:string,
    volume:number,
    wood:string,
}

let tab = ():table =>{
    return {
        color:"milky",
        volume:6,
        wood:"beed mushk"
    }
}

// console.log(tab().color);

for(let i in tab()){
    console.log(i);
}



function func1() { 

    console.log("please, wait....")

    
    
// }

// function func2(callback){
//     console.log("Operation completely successfully");

//     callback
// }

// func2(func1());



// function overloading

// function add(left:number, right:number)
// function add(left:string, right:number)
// function add(left:number, right:string)
// function add(left:any, right:any){

//     return left + right;

// }

// console.log(add(3, "9"));



// console.log("*********************Arrays*******************");

// let arr  = [4, "Hi", true, undefined, null] // no fixed size in an array

// console.log(arr[3]);

// for (let i of arr){
//     console.log(i);
// }


// console.log("*********************Tuple***************");


let tp:[number, string, boolean, number] = [5, "str", true, 8];

console.log(tp[2]);

for(let i of tp){
    console.log(i);
}







