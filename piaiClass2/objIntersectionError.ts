type personBase = {name:string};

type male = personBase & {type:"male"|"female", beared:boolean}
type female = personBase & {type:"male"|"female", makeup:boolean}

type Person = male | female;

const firstPerson:Person = {
    name:"Hamza",
    type:"male",
    beared:true,
    makeup:false
}

function song(first:string, second?:string){
    console.log(first,second)
}

song("hal muhnja keer","dil je veeran rinn ty");
song("tuhnji yad ji");

