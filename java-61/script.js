// faulty calculator solution

var num1 = parseInt(prompt("Please enter num1"));
var num2 = parseInt(prompt("Please enter num2"));

var op = prompt("Select Operator")
var num = Math.random()
if (num > 0.1){
    if(op =="+"){
        console.log(num1+num2)
    }
    else if(op =="-"){
        console.log(num1-num2)
    }
    else if(op =="*"){
        console.log(num1*num2)
    }
    else if(op =="/"){
        console.log(num1/num2)
    }
    else{
        console.log("Invalid operator")
    }
}
else{
    if(op =="+"){
        console.log(num1-num2)
    }
    else if(op =="-"){
        console.log(num1/num2)
    }
    else if(op =="*"){
        console.log(num1+num2)
    }
    else if(op =="/"){
        console.log(num1**num2)
    }
    else{
        console.log("Invalid operator")
    }
}

