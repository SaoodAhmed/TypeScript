"use strict";
// let annouceSong = (songs:string, singer?:string)=>{
//     console.log("Song: "+songs)
//     if(singer){
//         console.log("singer: "+singer);
//     }
// }
exports.__esModule = true;
// const returnNum = (...songs:string[] ):number=>{
//     for(let song of songs){
//         console.log(song);
//     }
//     return songs.length
// }
// console.log(returnNum("Haal muhnja puchy ko ta ehro hujy","Dill weraan ran","Tuhjy yad ji wary aa veerrr"));
// let getSong=(songs:string):Date|undefined=>{
//     switch(songs){
//         case "pyar jo ghalriyo":
//             return new Date();
//         case "hi kamora":
//             //return "unknown"; // "error bcz retrun type is either Date or undefined"
//         default:
//             return undefined;
//     }
// }
// console.log(getSong("pyar jo ghalriyo"))
// let func1 = (callback:()=>void)=>{
//     console.log("wait ...")
//     callback()
// }
// let func2 = ():void=>{
//    console.log("process is completed successfully!!");
//    return;
// }
// func1(func2);
// function func():void{
//     return ;
// }
// let new_var:string|undefined;
// new_var=func(); // error 
function raisError(message) {
    throw new Error(message);
}
console.log(raisError("HI"));
