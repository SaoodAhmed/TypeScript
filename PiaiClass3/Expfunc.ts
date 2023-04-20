function hotel(breakfast:boolean|undefined, lunch:boolean|undefined, dinner:boolean|undefined){
    if(breakfast === true && lunch === true && dinner == true){
        let htl = "you can get three time of food";
        return htl;
    }else if(breakfast === true || (lunch === false && dinner == false)){
        let htl1 = "Only, breakfast";
        return htl1;
    }else if(breakfast === false && (lunch === true && dinner === true)) {
        let htl2 = 'lunch & breakfast';
        return htl2
    }else {
        return undefined;
    }
    
}

console.log(hotel(true,true,true));
console.log(hotel(true,false,false));
console.log(hotel(false,true,true));
console.log(hotel(false,false,false));