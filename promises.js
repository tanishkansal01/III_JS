const promise1=new Promise((resolve,reject)=>{

    let success=true;
    if(success){
        resolve("Promise is resolved");
    }
    else{
        reject("Promise is rejected");
    }
});
promise1
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
});
