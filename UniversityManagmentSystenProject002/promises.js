let promise = new Promise((resolve, reject)=>{   
    let nos = Math.floor(Math.random()*2);

    if(nos === 0 ){
        resolve("Success")
    }else{
        reject("Failure")
    }
})

// promise
//     .then((data)=>{
//         console.log("Resolve: "+data);
//     },(err)=>{
//         console.log("Rejected: "+err);
//     })


promise
    .then((data)=>{
    console.log("Resolve: "+data);
})
    .catch((err)=>{
        console.log("Catch Eroor: "+err)
})