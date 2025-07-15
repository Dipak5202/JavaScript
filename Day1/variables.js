


// var , let ,   const

//let

let name = "Dipak"
let age =  27
let isMarride = true

let something // undefined

something= 12 // now its number type


//const

const Days = 31
// Days = 34 // cant possible to assign new value its const


// var 

// var and let are the same only diffrent is var scope is global and for let is block scope

//global
{
    //block
    var a= "var"
    let b= "let"
    const c = "const"

    console.log(a); // global scope  block
    console.log(b); // block scope  block
    console.log(c); // block scope   block
}

console.log(a); // global scope  global
console.log(b); // block scope   global
console.log(c); // block scope   global

