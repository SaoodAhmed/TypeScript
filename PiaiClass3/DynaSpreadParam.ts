// ****************************** Spread Operators *************************


// function Bag(price:string,...type:string[]){

//     return price.concat(","+type.join(","))

// }
// console.log(Bag("200", "Blue","Grossary Bag", "50 sqft"));






// function sorting(...num:number[]){

//     return num.sort();

// }

// console.log(sorting(4,3,1,9,5,7));





// function findSum(...num:number[])
// {
//     var sum = 0;
//     num.forEach(function(number)
//     {
//         sum = number+sum;     
//     });
//     return sum;
// }
// let result = findSum(1, 2, 3)
// console.log(result);    // 6





// function sum(...x:number[]){

//     var sum = 0;
//     x.forEach(function(x){
//         console.log(x);
//     });
//     return sum;

// }

// console.log(sum(4, 6, 7, 8));


// function singAllTheSongs(singer: string, ...songs: string[]) {
//    for (const song of songs) {
//    console.log(`${song}, by ${singer}`);
//    }
//    }
//    singAllTheSongs("Alicia Keys"); // Ok
//    singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");


function singAllTheSongs(singer:string, ...songs:string[]){
   for(const song of songs){
      console.log("song is ",song+"sung by "+singer);

   }
   
}
singAllTheSongs("Saud")
singAllTheSongs("Saud","Hath m khani hithyar qalam ja");
singAllTheSongs("Saud"," tokha door ghuziryal dehria"," inqlab sa thyo inqlab sa thyo", "xyz")




























