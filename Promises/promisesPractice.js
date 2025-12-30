
function fetchData(){
    console.log("Fetching data...");
    console.log("still fetching...");

    // setTimeout(() => {
    //     console.log("Data fetched!");
    // }, 4000);

    let fetchPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Data fetched!");
        }, 4000);  
        // reject("Error fetching data."); 
    });
    return fetchPromise;
}
// fetchData().then((data) => {
//     console.log(data);
// });

async function asyncFetchData(){
    console.log("Starting async fetch...");
    try{
        let data = await fetchData();
        console.log(data);
        console.log('End of async fetch.');
    } catch (error) {
        console.error("Error:", error); 
    }
    
}
asyncFetchData();