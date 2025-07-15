



console.log( 12 || 24);  // 12
console.log(Boolean(12 || 24));
console.log( 12 && 24);  // 24
console.log(Boolean(12 && 24));


console.log( 0 || 12); // 12
console.log(Boolean(0 || 12));
console.log( 0 && 12); //0
console.log(Boolean(0 && 12));


console.log( "abc" || "abcderfgdvfd"); //abc
console.log(Boolean("abc" || "abcderfgdvfd"));

console.log( "abc" && "abcderfgdvfd"); //abcderfgdvfd
console.log(Boolean("abc" && "abcderfgdvfd"));


console.log( null || undefined); //undefined
console.log(Boolean(null || undefined));

console.log( null && undefined); //nulls
console.log(Boolean(null && undefined));


console.log( "abc" || console.log("acbsdfsdf")); //abc
console.log( "abc" && console.log("2acbsdfsdf")); //acbsdfsdf

console.log("---------------------");

