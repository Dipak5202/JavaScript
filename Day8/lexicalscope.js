

// Lexical scope (also called static scope) means that the scope of a variable is determined by where it is written in the source code, 
// not by where or how a function is called at runtime.

// In simple terms:
// 👉 A function can access variables that are defined in its own scope or in any outer scope where it was defined.
// debugger
function GrandParent() {
    const grandFather = "GrandParent";

    function Parent() {
        const father = "Parent";

        //Scope of Child function is Lexical scope
        function Child() {
            const child = "Child";

            console.log(grandFather); // Accessing grandParent variable
            console.log(father); // Accessing parent variable
            console.log(child); // Accessing child variable
        }

        Child(); // Call the Child function
    }
    Parent(); // Call the Parent function
}

GrandParent(); // Call the GrandParent function
console.log("----");
// Output:
// GrandParent
// Parent
// Child