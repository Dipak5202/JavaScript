
let a = 10.5;
console.log(a)


const student = {
    namee: "dipak",
    age:26
}
console.log(student)

let arr = [3,6,4,7,9,1,5]

// arr.forEach((val)=>{
//     console.log(val)
// })

// let result = arr.map((val) => {
//     return val * val
// })

// console.log(result)

let stuarr = [{
    fullname : "Dipak",
    age : 26
},
{
    fullname : "sagar",
    age : 37
},
{
    fullname : "ajit",
    age :34
}]

//foreach
stuarr.forEach((val)=>{
    console.log(val.fullname)
})

//map
let names = stuarr.map(val =>{
    return val.fullname
})

console.log(names)

//filter
let oparr = stuarr.filter(val=>{
    return val.age > 30
})

console.log(oparr)

//reduce
const op = arr.reduce((result,val)=>{
    return result + val
})
console.log(op)
