

const bbb1 = {
    name: "Dipak",
    age: 20
}
console.log(bbb1);
const bbb2=bbb1;
console.log(bbb2);
bbb2.age = 30;
console.log(bbb2);
console.log(bbb1);

// "bbb2"@616327	
// map::system / Map (InternalizedOneByteString)@95
// "bbb1"@616335
// map::system / Map (InternalizedOneByteString)@95

//copy object and array
const bbb3 = {}

Object.assign(bbb3, bbb1);

bbb3.age = 40;
console.log(bbb3);

const bbb4 = {...bbb1};
bbb4.age = 50; 
console.log(bbb4);