
// Event Bubbling

const greenDiv = document.querySelector('.green');
const pinkDiv = document.querySelector('.pink');
const blueDiv = document.querySelector('.blue');


greenDiv.addEventListener('click', (event) => {
    console.log('Green Div Clicked');
    event.stopPropagation(); // Stops the event from bubbling up to parent elements
});

pinkDiv.addEventListener('click', (event) => {
    console.log('Pink Div Clicked');
    event.stopPropagation();
});

blueDiv.addEventListener('click', (event) => {
    console.log('Blue Div Clicked');
    // for (let i = 0; i < 5; i++) {
    //     // Simulating a long-running task
    //     // blueDiv.click();
    //     greenDiv.click();
    //     pinkDiv.click();
    // }
    event.stopPropagation();
});


//event capturing
const redDiv = document.querySelector('.red');
const yellowDiv = document.querySelector('.yellow');
const blackDiv = document.querySelector('.black');


redDiv.addEventListener('click', (event) => {
    console.log('Red Div Clicked');
    // event.stopPropagation(); // Stops the event from bubbling up to parent elements
}, true);

yellowDiv.addEventListener('click', (event) => {
    console.log('Yellow Div Clicked');
    // event.stopPropagation();
}, true);

blackDiv.addEventListener('click', (event) => {
    console.log('Black Div Clicked');
    // event.stopPropagation();
}, true);