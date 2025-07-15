
const user5 = {
    firstname:"Dipak",
    lastname:"Chaudhari",
    age:27,
    address:{
        city:"copda",
        pincode:123456,
        dist: "jalgaon"
    }
}

console.log(user5)

// it will not work becouse
// user its const reference you can change you can chnage key value of object 
// user = {
//     firstname:"Sager",
//     lastname:"Patil",
//     age:27
// }
// console.log(user)

//you can chnage key values
user5.lastname = "Patil"
console.log(user5)

//you can also add key 
user5.location = "chopda"

//// now you can see its possible add new key to object or we can also delete the key

//user5.lastname = "Patil"  aading
// on console "delete user.5.lastname"  delete

//how to prevent from this 
//Not possinle to add, delete but  possible to change value of key
Object.seal(user5)

user5.firstname = "aaditi"


//Not possinle to add, delete and not possible to change value of key
Object.freeze(user5)

user5.age = 22


/// "in" keyword checks key present or not in object
if ("lastname" in user5){
    console.log("preset")
}