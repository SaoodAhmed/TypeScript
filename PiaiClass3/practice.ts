// let annouceSong = (songs:string, singer?:string)=>{
//     console.log("Song: "+songs)
//     if(singer){
//         console.log("singer: "+singer);
//     }
// }

// annouceSong("piyar jo galhiryo", "Saud Ahmed");


// let annouceSongs = (singer:string, ...songs:string[])=>{
//     for(let song of songs){
//         console.log(song +" by "+singer)
//     }
// }

// annouceSongs("Saud Ahmed","piyar jo ghaliryo","Tuhnji yad ji wari a veer", "Hal muhnja puchy ko ta ehro hujy");


export {}

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



function raisError(message:string):never{
    throw new Error(message);
}
console.log(raisError("Hi!!"));