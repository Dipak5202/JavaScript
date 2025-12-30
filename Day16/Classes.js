/*
-----Topics

Classes
Private field
Static Block
Static Methods
Static Variables
Getter
Setter
*/ 


class User{

    // # use to declare private fields
    #Age; // private field
    #LastName; // private field
    #FirstName; // private field
    constructor(firstName, lastName, age){
        this.#FirstName = firstName
        this.#LastName = lastName
        this.#Age   = age
    }
    getBirthYear(){
        return new Date().getFullYear() -  this.#Age        
    }

    //private method
    #getFullName(){
        return this.#FirstName + " " + this.#LastName
    }
 
    ////////////////////////////
    //getter
    get fullname(){
        return `Full Name is: ${this.#FirstName} ${this.#LastName}`
    }

    //setter
    set fullname(fullName){
        const parts = fullName.split(" ")
        this.#FirstName = parts[0]
        this.#LastName = parts[1]
    }

    /////////////////////
    //Static Keyword
    static {
        console.log("Static Block Executed")
        this.state = "Maharashtra"
        this.getStateName = () => {
            return "State is: " + this.state
        }
    }
    //you can static variables and methods inside static block/methods
    static getCityName(){
        return "City is: " + this.city
    }
    static city = "Chopda"
}

// // Prototype Methods
// CreateUser.prototype.getBirthYear = function() {
// return new Date().getFullYear() -  this.age
// }

// // Full Name
// CreateUser.prototype.getFullName = function() {
// return this.firstName + + this.lastName
// }

// Creating User Objects
const user1 = new User ('Aman','Mishra', 32)
const user2 = new User('Anurag', 'Singh', 72)