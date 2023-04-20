// inferred object union 


// const poem = Math.random() > 0.5? 
// {name:'Saud Ahmed', page:300}
// :{name:"Ali", rhymes:true}
// console.log(poem);








// Explict object Union

// type objWithPages = {
//     name:string;
//     pages?:number;
// };

// type objWithRhymes = {

//     name:string;
//     rhymes?:boolean;

// };

// type Poem = objWithPages | objWithRhymes;   // Explict union

// const poem:Poem = Math.random() > 0.5? 
// {name:"Saud", pages:500}: 
// {name:"Ali", rhymes:true}

// console.log(poem);








//Explict opbject union

// type person = {
//     name:string,
//     age:number,
//     address?:string
// } | {                          // explict union
//     name:string,
//     age?:number,
//     address:string
// };

// const firsPerson = Math.random() > 0.5?    // ternary operator

//     {name:"Falak Shair", age:17}:
//     {name:"Hamza", address:"Hyd"};


// console.log(firsPerson);




type lowRain = {
    flood:string,
    location:string

};
type highRain = {
    flood:string,
    location:string,
    rain_mm: number
}
 type Rain = lowRain | highRain;

 const rain:Rain = { 
    flood:"heavy rain", 
    location:"sindh",
    rain_mm:100
 }

 console.log(rain.flood);
console.log(rain.location);