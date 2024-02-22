// Strings  

let a = "Tarun";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);


let name = "Tarun";
let friend = "Tony";
console.log("My name is "+name+" and my friend name is "+friend);
// It is using template literals
console.log(`My name is ${name} and my friend name is ${friend}`);

let b = "Harry bhai"

// these are the functions and require extra parentheses around
// it is a property which does not require extra parentheses because it gives an value

console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.replace("bhai", "bhau"))
console.log(b.concat(friend))
console.log(b.concat(a,"Aishwariya"))