


const option1 = 10  //number
const option2 = "10"  //string

console.log(option1 == option2);  //true // doing implicite (automatic) converstion str to int

console.log(option1  === option2); // false checking type also

console.log(option1  === parseInt(option2)); // true // explicite conversion (manula)

console.log( 12 !== "12" );