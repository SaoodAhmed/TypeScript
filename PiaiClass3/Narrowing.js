//******************Narrowing Down***************
function add(left, right) {
    if (typeof left === 'number' && typeof right === 'number') {
        var result = left + right;
        return result;
    }
    else {
        var result = +left + +right;
        return result;
    }
}
console.log(add("20", "30"));
console.log(add(20, 30));
// function vehicle(model:string|number, wheels:string|number){
//     if (typeof model === 'string' && typeof wheels === 'number'){
//         console.log("It's a vehicle")
//     }else{
//         console.log("not a vehicle");
//     }
// }
