// let a = 'str';          // not literal bcz it can be changable.
// a = 'saud';
                          
// const val = 34;        // literal type; literal variable start with const nd desriable value assingn to variable
//  val = 5;              // that cann't be change


const ac = (name:string|number,size:number|string,litReturnType:'text'|6):string|number|undefined=> { //litReturnType is literal variable

    if(name === 'string' && size === 'number'){
        let price = 220000;
        return price;
    }else if(name === "Orient" && size === 1){
        let price = 170000;
        return price;
    }else {
        return undefined;
    }
}

console.log(ac('Orient',1.5,'text'));
console.log(ac('Orient',1,6));


