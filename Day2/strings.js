

const msg = "Learning Javascript"

console.log(msg.length)
console.log(msg.at(5))
console.log(msg.charAt(5))
console.log(msg.charCodeAt(5)) //ASCII
console.log(msg.concat(" Today"))
console.log(msg.endsWith("pt")) //check that at last

console.log(msg.includes("Java")) //checks string in main string 
console.log(msg.indexOf("Java")) // gives index number

console.log(msg.indexOf("a")) // --> 2 First ocurance
console.log(msg.lastIndexOf("a")) // --> 12 Last Ocurance


//1st paramter should be More than String length
console.log(msg.padStart(30,"*")) // ***********Learning Javascript

//1st paramter should be More than String length
console.log(msg.padEnd(30,"$")) // Learning Javascript***********

console.log("  Dipak   ".trim()) // removes spaces from start and end

console.log("  Dipak   ".trimEnd()) // removes spaces from end

console.log("  Dipak   ".trimStart()) // removes spaces from start

console.log(msg.slice(0,6)) // give string from 0 to 6 index

console.log("Java".split("")) // ['J', 'a', 'v', 'a']

console.log(msg.replace("Learning","Done")) // Done Javascript



// template literal

const nameaaa = "Dipak"

// use ${ var name } in ` `
console.log(`My name is ${nameaaa.concat(" Chaudhari")}`)



