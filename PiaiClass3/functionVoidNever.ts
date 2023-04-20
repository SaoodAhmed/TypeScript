export {}
let result:number|undefined|string;

function doAdd(left?:any, right?:any){

    if(typeof left === 'undefined' || typeof right === 'undefined'){
        return;
    }else if(typeof left === 'number' && typeof right === 'number'){
        result =  left + right;
    }else{
        result = "";
    }
}

doAdd();
console.log(result);
doAdd(5,6);
console.log(result);
// doAdd("3", "7");
//console.log(result);
doAdd("23",);
console.log(result);




