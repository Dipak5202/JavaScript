

console.log("Primative Types");

//number
console.log(typeof 100); // -> number
console.log(typeof 23.43); // -> number

//undefined
console.log(typeof undefined); // -> undefined

//string
console.log(typeof "sdfsgfsf"); // -> string

//boolean
console.log(typeof true); // -> boolean
console.log(typeof false);
console.log(typeof +true); // -> 1 // true means  1 and false means 0 
console.log(typeof +false); // -> 0 //true means  1 and false means 0 
console.log(typeof -true); // -1 // true means  1 and false means 0 
console.log(typeof -false); // -> -0 //true means  1 and false means 0 

//null
// In JavaScript, null is a primitive value that represents the intentional absence of any object value. 
// However, the typeof operator returns "object" when applied to null. 
// This behavior is a long-standing bug in JavaScript, 
// originating from the very first implementation of the language.

console.log(typeof null); // -> object 

//bigint
console.log(typeof 5422452454n); // -> bigint 

//symbol




