// debugger

/*
Async Await Example

When we are using async await, the code looks synchronous but it is still asynchronous.

In this example, we have a function fetchData that simulates fetching data from a server with a delay of 5 seconds.
The getdata function is an async function that waits for the fetchData function to complete before logging the result.
Meanwhile, the printdata function prints "Printing data..." every second.
*/

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 5000);
    });
}

async function getdata() {
    try {
        console.log("Fetching data...");
        const result = await fetchData();
        console.log("Data received:");
        console.log(result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function printdata() {
    setInterval(() => {
        console.log("Printing data...");
    }, 1000);
}

console.log("Start");
getdata();
printdata();
console.log("End");