const fs = require('fs');

// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//          console.log("ERROR")
//     }else{
//         console.log(data);
//     }
// })


fs.promises.readFile('file.txt','utf-8')
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
fs.promises.readFile('filo.txt','utf-8')
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))


