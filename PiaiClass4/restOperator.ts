

let sum = (num:number[])=>{
    return num.reduce((total, no)=>total+no);
}

console.log(sum([3,5,2]));


//Rest Operator
let add =  (...nos:number[])=>{
    return nos.reduce((total,no)=>total+no);
}
console.log(add(5,6,4,6,5,4,3));
