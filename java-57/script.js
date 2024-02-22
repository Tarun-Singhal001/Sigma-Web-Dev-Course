// Loops introduction in javascript

// For loop
for (let i = 0; i < 100; i++) {
  console.log(i + 1);
} 
let obj = {
    name: "Tarun",
    role: "Programmer",
    company: "Note yet"
}

// for in loop: It is used for printing keys and values of an objects

for (const key in obj) {
    const element = obj[key];
    console.log(key,  element);
}

// For of loop: It is used to print characters of an string
for (const c of "Tarun Singhal") {
    console.log(c);
}

// While loop

let j = -5
while(j<10){
    console.log(j)
    j++
}

// Do while loop

let i = 111
do{
    console.log(i)
    i++
}while(i<10)