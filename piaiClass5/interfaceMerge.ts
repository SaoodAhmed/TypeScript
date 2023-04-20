export{}

// interface Human{
//     name:string|number
// }

// interface Human{
//     age:number|string
// }

// interface Human{
//    // name:string|number, // merging
//     dob:string
// }

// interface Person extends Human{
//     age:string,
//     address?:{
//         country:string,
//         provence:string,
//         location:string,
//         postalcode:number
//     }
//     gender:"Male"|"Female"
// }


// let Woman:Person = {
//     name:"Ayesha",
//     age:"32",
//     dob:"1990-10-23",
//     gender:"Female"
// }
// console.log(Woman.name);



// interface Happy{
//     happyType1:string,
//     happyType2:string
// }

// let happy:Happy={
//     happyType1:"Inside <--(:",
//     happyType2:":)--> Outside "
// }

// console.log(happy.happyType1);
// console.log(happy.happyType2);



interface charityHotl {
    name:string|undefined,    // base property 
    address:string,
}

interface charityHotl {
    openTime:string,
    name:string|undefined, // same defination that mentioned above interface
    closingTime:string,
}

interface Hotel extends charityHotl{
    name:undefined // overridden property
    breakFastTiming:string,
    lunchTiming:string,
    dinnerTiming:string,
}
let hotel1:Hotel = {
    name: undefined,      // overridden property use not base
    address:"Gulshan e Mehran phase-i, london Town Qasimabad Hyd",
    openTime:"8:00 am",
    closingTime:"10:00 pm",
    breakFastTiming:"9:00 am",
    lunchTiming:"1:00 pm",
    dinnerTiming:"8:00 pm",
}

console.log(hotel1)

