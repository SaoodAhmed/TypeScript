
// Use case of chaining
// DATABASE - get city information - i will use promise
// weather API: get weather condition of city - i will use pomise
// DATABASE: Save value in database 


// function job(status){

//     let promise = new Promise((resolve, reject)=>{   
//         if(status === 'done' ){
//             resolve("Success")
//         }else{
//         reject("Failure")
//         }
//     })
//     return promise;
// }


// job('done')
//     .then((data)=>{ // sucess printed
//     console.log("aResolve: "+data);
//     return job('done');
// })
//     .catch((err)=>{  // ignore
//         console.log("Catch Eroor: "+err)
// })  
//     .then((data)=>{ // done sucess
//         console.log("Resolve 1: "+data);
//         return "Hello! World"
//     })
//     .then((data)=>{ // Hello world
//         console.log("Resolve 2: "+data);
//     })
//     .then((data)=>{ // no data --> undefined
//         console.log("Resolve 3: "+data)
//     })




function job(status){

    let promise = new Promise((resolve, reject)=>{   
        if(status === 'done' ){
            resolve(status+" Success")
        }else{
            reject("Failure")
        }
    })
        return promise;
}


job('done')
           .then((data)=>{
                console.log("Resolve: "+data)
                if(data === 'done Success'){
                    throw 'Something Wrong..!!'
                }
                return job('done');
            })
           .catch((err)=>{
                console.log("Error "+err)
           })
           .then((data)=>{
                console.log("Resolve 1: "+data);
            return "Hello! Saud"
           })
           .catch((err)=>{
                console.log("Error 1: "+err);
           })
           .then((data)=>{
                console.log("Resolve 2: "+data)
           })
           .then((data)=>{
                console.log("Resolve 3: "+data)
           })


