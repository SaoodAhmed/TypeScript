type washingMachine = {
    rpm:number,
    size:number,
    model?:string
}

let wm1:washingMachine = {
    rpm:500,
    size: 1.5,
}
console.log(wm1)


interface washMachin {
    rpm?: number,
    size: number,
    model:string
}

let wm2:washMachin={
   
    size:1,
    model:"Haier"
}
console.log(wm2)


// let book:{
//     title:string,
//     page:number
// }

// let book1=book = {
//     title:"Love",
//     page:23
// }

type Book = {
    title?:string,
    author:string
}

let book1:Book = {
    title:"A smarter way to learn javascript",
    author:"xyz"
}

console.log(book1);


interface TBook {
    title:string,
    author?:string
}

let tbook1:TBook = {
    title:"programming"
}

console.log(tbook1);