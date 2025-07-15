debugger
message()
//will return a greeting message
function greet(name = "Guest",lastname) {
    return `Hello, ${name}! ${lastname || "Badman"}`;
}

console.log(greet("Alice"));
console.log(greet()); // This will use the default value "Guest"

console.log(greet("Alice","Chaudhari"));

//this will return undefined becouse return is not used
function message(){
    const d = 12
    console.log("Adding numbers...");
    greet("John", "Doe");
}

console.log(message()); // This will log undefined because the function does not return a value


