

const line = "Higher Order Functions";
console.log(line);
console.dir(line); // 
console.log(typeof line);


const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.dir(arr); // Array
console.log(typeof arr);

function a(){
    console.log("This is function a");
}
a();
console.log(typeof a); // function
console.dir(a); // function object



//Higher Order Function
// A function that takes another function as an argument or returns a function as its result is called

function higherOrderFunction(callback) {
    console.log("This is a higher order function");
    callback(); // Call the callback function
    return (() => {
        console.log("This is a returned function from the higher order function");
    });
}

// Example callback function
function callbackFunction() {
    console.log("This is the callback function");
}

// Call the higher order function with the callback
let returnedFunction = higherOrderFunction(callbackFunction);  // Output:
returnedFunction(); // Call the returned function

//Or

higherOrderFunction(callbackFunction)(); // Call the higher order function and immediately invoke the returned function


let num = setTimeout(() => {
    console.log("This is a delayed message");
}, 2000);
console.log(num);

// setTimeout is used to execute a function after a specified delay
setTimeout(() => {
    console.log("This is a delayed message after 3 seconds");
}, 3000);
// Clear the timeout
// This will prevent the timeout from executing if you want to cancel it
clearTimeout(num);

setTimeout(callbackFunction, 6000); // Call the callback function after 6 second


// setInterval is used to repeatedly call a function at specified intervals
setInterval(() => {
    console.log("This is a repeated message every 2 seconds");
}, 2000); // Call the function every 2 seconds

