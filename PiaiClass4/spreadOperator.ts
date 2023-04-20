let chair:string[] = ["legs","price","material"];
let cities:Array<string> = ["Hyderabad","jacobabad"];
let persons:number[] = [34,67,664,655,454,];

let chairPers = [...chair,...persons];

let chaircit = [...chair,...cities];

console.log(chairPers);
console.log(chaircit);

