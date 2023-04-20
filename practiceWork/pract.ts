// let var1 = Math.random()>0.5? "Saud":5;   // Narrowing: typescript itself define or understand or decide which type var1 contains
// console.log(var1);



// let explt:string = "Saud";  // --> Explict
// let implt = 34;   // --> implict




// let a = 5;   
// a = "5";  // error string not assign to type number



// let noOfStairs;  // any type

// noOfStairs = "ProProgrammer";  // any type assignabel
// console.log(noOfStairs.toUpperCase());
// console.log(noOfStairs.toLowerCase());


// noOfStairs = 1000;   // any type assignable
// console.log(noOfStairs.toPrecision(1));
// console.log(noOfStairs.toLowerCase()); // error toLowerCase() function doesn't exists in type number


const lock: {price:number, weight:number} = {
  price:500,
  weight:20
}

export {lock};


