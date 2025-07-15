

console.log('Start');

for (let i = 0; i < 4; i++) {
        console.log(`Index ${i}`);
}


setTimeout(() => {
    console.log('Timeout 1');
}, 2000);

setTimeout(() => {
    console.log('Timeout 2');
}, 4000);

console.log('End');



const arr = [1, 2,6,8];

function processArray(a,b,c,...arr) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    for (let i = 0; i < arr.length; i++) {
        console.log(`Processing element: ${arr[i]}`);
    }
}

processArray(...arr,5,6,7,8,9);