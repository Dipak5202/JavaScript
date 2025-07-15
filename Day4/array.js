

const names =  ["Dipak","Aaditi","chaudhari"]

names[3] = "Patil" //['Dipak', 'Aaditi', 'chaudhari', 'Patil']
names[20] = "asdafaf"
names[200] = "asdafaf"
names.push("sfgsfvd")
names.push("sfgsdfsdcsfvd")

console.log(names);
names.pop()
console.log(names);

const data = ["Dipak",27,true,null]

console.log(data);

const random = [ 123,345,"sedf",{
    nam:"dipak",
    age:27,
    education:["BE","CDAC"]
}]
console.log(random);


let numbers = [1,2,3,4,5,6,7]
console.log(numbers);
numbers.shift()
console.log(numbers);


//concat returns new array
let newarray = numbers.concat(names)
console.log(newarray)

console.log(newarray.indexOf("Patil")); //3

console.log(newarray.includes("Patil")); //true

console.log(newarray.reverse()); 

console.log(newarray.sort());


console.log(newarray.slice());