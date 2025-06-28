

let arr = [2,3,4,5,6,7,8]
console.log(arr)


// Foreach 
arr.forEach((val)=>{
    console.log(val*val)
    return val*val
})

//map
let newarr = arr.map((val,index)=>{
    return val * index
})
console.log(newarr)

//filter
let newarr2 = arr.filter((val)=>{
    return (val % 2) == 0
})
console.log(newarr2)

//reduce

let final = arr.reduce((res,val)=>{
    return res + val
})
console.log(final)


//chaining
let got = arr.map((val)=>{
    return val + 3
}).filter((val)=>{
    return (val % 2) == 0
}).reduce((res,val)=>{
    return res + val
})
console.log(got)