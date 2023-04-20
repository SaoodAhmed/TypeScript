export {}


// function add(a:number, b:number){
//     return a+b;
// }
// let result = add(34,56)
// console.log(result);

// let nums:[number,number] = [34,56]
// console.log(add(...nums));


function multi(left:number, right:number){
    return left*right;
}

let nos:[number,number][] = [
    [45,56], // 0 
    [45,53], // 1
    [72,54] // 2
]

let show = (nos:[number,number][]) =>{
    return nos.forEach(items => {console.log(multi(...items))
        
    });

}
show(nos);