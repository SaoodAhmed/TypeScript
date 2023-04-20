setTimeout(()=>{
    console.log("wait, for 2 seconds")
    setTimeout(()=>console.log("Hi! i am here, Saud after 1 second"),1000);
},2000)
setTimeout(()=>console.log("Process complete after 0.5 second...!!"),500);
