/*
This faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows:
+ --> -
- --> *
* --> +
/ --> **
3. It performs wrong operation 10% of the times


for a faulty calculator we use      "Math.random"      function
*/

// function sum(a,b){
//     c = Math.random()
//     if(c>0.1){
//         console.log(c)
//         console.log(a+b)
//     }
//     else{
//         console.log(c)
//         console.log(a-b)
//     }
// }
// sum(5,8)

let a = 5;
let b = 10;
let op = "+";
let c = Math.random()
console.log(c);
if(c>0.1){
    if(op === "+"){
        console.log(a+b);
    }
    else if(op === "-"){
        console.log(a-b);
    }
    else if(op === "*"){
        console.log(a-b);
    }
    else if(op === "/"){
        console.log(a-b);
    }
}
else{
    if(op === "+"){
        console.log(a-b);
    }
    else if(op === "-"){
        console.log(a*b);
    }
    else if(op === "*"){
        console.log(a+b);
    }
    else if(op === "/"){
        console.log(a**b);
    }
}