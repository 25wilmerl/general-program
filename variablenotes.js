// this is not a comment
// we will use a comination of comments and code to build up our notes

// We start by declaring a variable
// Let myName = "Jeff";
// console.log (myName);
// myName = "Steve";
// console.log (myName);


// Here is a different way to declare a variable:
// const e = 2.71828
// console.log(e);
// e = 3.1415;
// console.log(e);
//^^^ this throws and error, because you can't change the value of a const.


// a third way to create a variable:
// var pi = 3.1415;
// console.log(pi);
// pi = e;
// console.log(pi);


// var and let are pretty interchangable, but const makes variables that 
// can't be changed.

// let total = 0;
// let i = 0;
// while (i < 1001){
//     total = total + i;
//     i = i + 1
// }
// console.log(total);



// We'll start looking at numbers and math below:
//javaScript can add
console.log(23 + 97);

let sumOfSix = 4 + 6 + 7 + 9 + 69 + 83;
console.log(sumOfSix);

//you cando math in the cosole including using variables from
//the javaScript file you ran.

//simulation of calculating percent error
const actual = 57;
let prediction = actual - 13;
let precentage = prediction / actual;
let percentError = 1 - precentage;
console.log(percentError);

/* Starts a multiline, or block, comment*/
/*
xytfugih
gfvadgvfgv cybeiyveug
fhiwigbwgigbwdciwb
gwbgwigwibfwjiw

hfvkweuyvuivceyiwfvwku/*


/* Mathematical operators in javaScript
+ -> addition
- -> subtraction
* -> multiplication
/ -> division
** -> exponentiaion (3**2 = 9)
% -> modulus

javaSript will work like a scientific calculator, and apply 
order of operations (modulus happens after division and before addition
But before addition and subtraction)

Unlike many other programming languages, javaScript only has 1 number type
(which is number)
other languages frequently have at least 2 types, most commonly 
int - integers
float - floating point numbers (decimals)
*/

// There are some rules for variables name injavaScript
// 1. The name may contain only letters, digits, or symbols, '$' and '_'
// 2. The first character may NOT be a digit
// 3. They cannot be "reserved" words. (you can't name a variable 'let', 'const.log')

