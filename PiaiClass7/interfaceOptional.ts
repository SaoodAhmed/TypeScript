interface Poet{
    name:string;
    born:number;
    type?:'Poet'|'Writer'
}
let Aamar:Poet;

Aamar = {
    name:"Aamar Jaleel",
    born:1940,
    type:"Writer"
}

let Latif:Poet = {
    name:"Shah Abdul Latif Sarkar",
    born:1700,
    type:"Poet"
}

printDetail(Latif);
printDetail(Aamar);

function printDetail(poet:Poet){
    console.log("The great "+poet.type+" " + poet.name,"born at "+ poet.born)
}
