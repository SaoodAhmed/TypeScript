// type firstAndLastName = {
//     first:string,
//     last:string
// };

// const hasBoth:firstAndLastName = {
//     first:"Saud",
//     last:"Ahmed"
// };

// const hasOneOnly:firstAndLastName = {   // usage error
//     first:"Hamza"
// };

// const excessAttribute:firstAndLastName = {   // Excess property checking
//     first:"Babe",
//     last: "Love",
//     address:"Hyd"
// }


// type fan = {type:string, weight:number};

// const celingFan:fan = {  // excess property checking error
//     type:"celling fan",
//     weight:4
//     rpm:500;
// }




// type fan = {type:string, weight:number, rpm:number};

// const celingFan:fan = {
//     type:"Celling fan",
//     weight:4,
//     rpm: 500
// }


// console.log(celingFan.weight +"kg of "+celingFan.type+" with "+celingFan.rpm+" rpm");




type author = {fName:string,lName:string};

type poem = {
    name:string,
    noOfPages:number, 
    Author:author 
};

const poemMatch:poem = {
    name:"Twinkle Twinkle little Star",
    noOfPages:1,
    Author:{
        fName:"Saud",
        lName:"Ahmed"
    }
}

console.log(poemMatch.name+" was written by "+poemMatch.Author.fName+" "+poemMatch.Author.lName);










