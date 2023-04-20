// type Food = {
//     readonly name:string,
//     price?:number,
//     weight?:number
// }

// let fd1:Food = {
//     name:"Potatoes",
//     price:50,
//     weight:1
// }

// // fd1.name = "bangil"  // error b/c read-only
// console.log(fd1);



// interface FastFood {
//     name:string,
//     readonly price:number,
// }

// let ffood1:FastFood = {
//     name:"Mini Zingar-Bargar",
//     price:150
// }
// console.log(ffood1);
// read(ffood1);
// function read(food:FastFood){
//     console.log(ffood1.price);
//     //ffood1.price = 200;  // error bcz read-only property
//     ffood1.name = "MAX - ZINGER BARGER";
//     console.log(ffood1.name);
// }



interface page{
    title:string,
    readonly text:string
}


const pg:page = {
    title:"Etherium Blockchain based charity system",
    text:"i love a lot!!"
}


// pg.text = "fsfsdsdf";
pg.title = "Hello";
console.log(pg);

// function Read(){
//     console.log(pg.text);
//     //pg.text = "i don't love"; // error
//     pg.title = "AAAAAAAA";
//     console.log(pg.title);

// }
// Read();