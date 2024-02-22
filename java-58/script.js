// What is functions
// A function is a block of code that is reusable and can be called multiple times.

function nice(name){
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is awesome!");
    console.log("Hey " + name + " your nature is also awesome");
}
nice("Tarun")

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);