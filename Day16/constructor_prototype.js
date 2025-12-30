

// Constructor Function and Prototype in JavaScript
function CreateUser (firstName, LastName, age) {
this.firstName = firstName
this.lastName  =LastName
this.age = age
}

// Prototype Methods
CreateUser.prototype.getBirthYear = function() {
return new Date().getFullYear() -  this.age
}

// Full Name
CreateUser.prototype.getFullName = function() {
return this.firstName + + this.lastName
}

// Creating User Objects
const user1 = new CreateUser ('Aman','Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)