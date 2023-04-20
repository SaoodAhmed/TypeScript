export {};


// function add(a:number, b:number):number{
//     return a+b;
// }

// console.log(add(5,7));



function tupSum(left:number, right:number):[string, number]{
    return ['sum of ', left+right]

}

let [label, result] = tupSum(7, 8);
label = "addition of two number ";
console.log(label+"return result "+result);

console.log(tupSum(5, 6));




// const monthWithLetterj = ["January","June"];
// monthWithLetterj[1] = "July";

// const daysOfWeek = ["Monday", "Tuesday", "Wednesday"] as const;
// daysOfWeek[0] = "Sunday"; // error

// console.log(daysOfWeek);



