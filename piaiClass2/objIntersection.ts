type houseDetails = {
    name:string,
    houseNumber:number,
    area:number
}

type houseLocation = {
    city:string,
    country:string,
    zip:number
}

type House = houseDetails & houseLocation;

const myHouse: House = {
    name:"Sarki House",
    houseNumber:39,
    area: 120,
    city:"Hyd",
    country:"pakistan",
    zip:234324324,
};

console.log(myHouse.name);