/*
Create a bussiess name generator by combining list of words 

Adjectives:
Crezy
Amazing 
Fire

Shop Name:
Engine 
Foods
Garments

Another word:
Bros
Limiited
Hub
*/

let rand = Math.random();
let first, second, third;

if (rand < 0.33) {
    first = "Crezy";
} 
else if (rand < 0.66 && rand>=0.33) {
    first = "Amazing";
} 
else {
    first = "Fire";
}

rand = Math.random()

if (rand < 0.33) {
    second = "Engine";
} 
else if (rand < 0.66 && rand>=0.33) {
    second = "Foods";
} 
else {
    second = "Garments";
}

rand = Math.random()

if (rand < 0.33) {
    third = "Bros";
} 
else if (rand < 0.66 && rand>=0.33) {
    third = "Limiited";
} 
else {
    third = "Hub";
}
console.log(`${first} ${second} ${third}`)