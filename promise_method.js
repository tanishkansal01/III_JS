const promise1=new Promise((resolve,reject)=>{
    let user=true;
    if(!user){
        reject("User is not valid");
    }
    else{
        resolve("User is valid");
    }
});
const promise2=new Promise((resolve,reject)=>{
    let orders=true;
    if(orders){
        resolve("Orders are available");
    }
    else{
        reject("Orders are not available");
    }
});




// Promise.all([promise1,promise2])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error.message);
// });




// Promise.race([promise1,promise2])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error.message);
// });




// Promise.allSettled([promise1,promise2])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error.message);
// });




// Promise.any([promise1,promise2])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error.message);
// });



function anyMethodOutput(promise1,promise2) {
    return Promise.any([promise1,promise2])
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error.message);
    });
}



async function getData() {
    let data=await anyMethodOutput(promise1,promise2);
    console.log(data);
}
getData();




