interface car{
    [i:string]:number|string
}

let Mehran:car = {
    name:"Mehran",
    wheels:4,
    model:2023
}
Mehran.volume = 5

console.log(Mehran);


interface duster{
    [i:string]:number;
}

let dust:duster = {
    //name:"", // error bcz you should have to create those properiteis that, stroe only numbers
    price:4
}