
var uname = "dipak"
console.log(uname); // dipak

//var
console.log(Lastname); //undefined // hoisting
var Lastname = "chaudhari"

//const and let
// console.log(a); //Cannot access 'a' before initialization
// const a =10

myfunc(); //hello world // hoisting
function myfunc() {
    console.log("hello world");
}

/////

myfunc1(); //hello world undefined // hoisting
var num1 = "Hoisted variable";
function myfunc1() {
    console.log(`hello world  ${num1}`);
}
    console.log(`hello world  ${num1}`);

// myfunc2(); //hello world 2 // error not hoisted
// const myfunc2 = function () {
//     console.log("hello world 2");
// }