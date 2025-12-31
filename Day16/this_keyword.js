

/////////////////////
console.log(this); // In global scope, 'this' refers to the global object (window in browsers)

function showThis() {
    console.log(this); // In a regular function, 'this' refers to the global object (window in browsers)
}

showThis();

this.showThis()

 /////////////////////

 const user = {
    name: 'Alice',
    greet: function() {
        console.log(this); // 'this' refers to the user object
    },
    introduce: () => {
        console.log(this); // 'this' refers to the global object (window in browsers) because arrow functions do not have their own 'this'
    }
};

user.greet();
user.introduce();

/////////////////////