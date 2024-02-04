/*
Write a program to calculate factorial of a number using for loops
 6! = 6*5*4*3*2*1
*/


function fact(num){

    let ans;
    ans=1;
    for (i = 1; i <= num; i++) {
        ans= ans*i;
    }
    console.log(`${ans}`)
}
fact(6)
fact(5)
fact(4)