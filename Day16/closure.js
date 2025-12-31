
let OutterCount = 0;
//Outter function
function makeCounter() {
    //outer function variable
    let Innercount = 0;
    return {
        //inner functions have access to the outer function's variables
        increment: function(){
            Innercount++;   
            OutterCount++;
            return {
                inner: Innercount,
                outer: OutterCount
            }       
        },
        decrement: function(){
            Innercount--;  
            OutterCount--; 
            return {
                inner: Innercount,
                outer: OutterCount
            };
        }
        };
}

const counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.decrement());