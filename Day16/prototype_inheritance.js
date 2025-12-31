/*
-----Topics

Prototype Inheritance
Classes
Extends Keyword
super Keyword
method overriding - Polymorphism
*/ 


class Person{
    Living(){
        console.log("Person is Living")
    }
}
class User extends Person{

    // # use to declare private fields
    #Age; // private field
    #LastName; // private field
    #FirstName; // private field
    constructor(firstName, lastName, age){
        super() // calling parent class constructor
        this.#FirstName = firstName
        this.#LastName = lastName
        this.#Age   = age
    }
    getBirthYear(){
        return new Date().getFullYear() -  this.#Age        
    }

    getFullName(){
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

    // Polymorphism 
    /*
    In Object-Oriented Programming, it means the same method name can behave differently depending on the object that calls it.
    In JavaScript, polymorphism is mainly achieved using method overriding with inheritance.
     */
    //method overriding
    working(){
        console.log(`User is working`)
    }

    //method overriding
    Living(){
        console.log("User is Living")
    }
}

class Student extends User{

    constructor(firstName, lastName, age, grade){
        super(firstName, lastName, age) // calling parent class constructor
        this.grade = grade
    }

    // Polymorphism 
    //method overriding
    working(){
        console.log(`Student is working`)
    }

    //method overriding
    Living(){
        console.log("Student is Living")
    }
}

// Creating User Objects
const user1 = new User ('Aman','Mishra', 32)
const student1 = new Student('Anurag', 'Singh', 72, 'A')