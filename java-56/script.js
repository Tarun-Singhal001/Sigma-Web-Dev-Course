// Ternary Operator: It is the only javascript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.
// In short ternary operator is writing conditional expression in a single line using "?" and ":"
// This is the code using ternary operators
var a = 50;
var b = 10;
var f;
f = a > b ? a - b : a + b;

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a + b;
}

*/
console.log(f);

// This is the same code that you can run in terminal
// a = 4
// b = 20
// c = a>b?(a-b):(a+b)



console.log("Hello I am conditional tutorial");

let age = 1;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if (age == 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("Are you kidding?");
} else if (age == 1) {
  console.log("Are you again kidding?");
} else {
  console.log("You cannot drive");
}

a = 6;
b = 8;
let c = a > b ? a - b : b - a;
