let add = (a:number|string, b:number|string):number|string|undefined=>{
    if(typeof a==='number' && typeof b === 'number'){
        return a+b;
    }else{
        return +a + +b;
    }
}


export {add};