

// //pending
// let pro = new Promise((resolve, rejected)=>{
//     console.log("Hiiiiii")
// })


// //resolved (fullfilled)
// let pro1 = new Promise((resolve, rejected)=>{
//     console.log("resolved")
//     resolve("resolved")
// })

// //Then - for resolved 
// pro1.then((res)=>{
//     console.log("Sucess",res)
// })

// //rejected
// let pro2 = new Promise((resolve, rejected)=>{
//     console.log("rejected")
//     rejected("rejected")
// })

// //catch for rejected
// pro2.catch((err)=>{
//     console.log("error ",err)
// })

//Async - Await

function getAsyncdata(){
    return new Promise((resolve,rejected)=>{
        console.log("Async Data")
        resolve("Async success")
    })
}

async function AccessAsyncData(){
    res = await getAsyncdata()
    console.log(res + "AccessAsyncData")
    await getAsyncdata()
    await getAsyncdata()
}

AccessAsyncData()
//Promises-------------------------------------

//Promise
function getPromiseData(){
    return new Promise((resolve,rejected)=>{
        console.log("Promise")
        resolve("success")
    })
}

//chaining of promise
getPromiseData()
.then((res)=>{
    return getPromiseData()
}).then((res)=>{
    return getPromiseData()
}).then((res)=>{
    console.log(res)
})


//callback-----------------------------------

//callback
function getdata(callback){
    setTimeout(()=>{
        console.log("callback function")
        if(callback){
            callback()
        }
        
    },2000)
}

// callback hell
getdata(()=>{
    getdata(()=>{
        getdata()
    })
})



