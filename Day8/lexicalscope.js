

debugger
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

// Output:
// GrandParent
// Parent
// Child