// // These are notes on conditionals in programing

// /* At its most basi levek, a conditioal statement is just "if" -> "then".
// We will see many more complicated examples, but all of them rely on the idea
// that you are checking if a condition is trrue, and then doing something
// based on the true/false nature of that condition.*/

// // Conditional statements rely on some form of comparison.

// /* Comparisons in javaScript, and most if not all progamming languages
// look like math equations to some extent.
// a < b ( is a less than b?)
// a > b (is a greater than b?)
// a == b (is a equal to b?)
// a <= b (is a less than or equal to b?)
// a >= b (is a greater than or equal to b?)
// */

// // examples:
// let a = 5
// console.log(5 < 3);
// console.log(5 > 3);
// console.log(a == 5);
// console.log(a == "5");

// // javaScript has a "===", for  "stricy equality". This means that
// // it will ask "Is a equal to b And do a and b have the same data type"?

// console.log(a === "5");

// // the last symbol we need to talk about before jumping into actual coditionals
// // is "!", "!" means "NOT"
// console.log(a != 3);

// // you can compare strings just like you can compare numbers
// console.log("Badin" > "Ross");
// /* rules for srting comparison:
// 1. Compare the first characters of each string.
// If the firstcharacter of the first string is greater than the first character
// of the second string, return True. If it is less than the first character of the
// second string, return False. If they are equal, continue to next step.
// 2. Compare the second character or each string, as desibed above.
// 3. Continue until either string ends.
// 4. If both strings are equal AND have the same length, return false (they can equal)
// 5. If one string is longer, that string is grter than the other string
// */
// console.log("R" > "B");
// console.log("b" == "B");

// /* Now that we know how comparisons work, we can look at conditionals. */
// // An if statement allows you to "gate" code behind a condition being true.
// if (3 < 5){
//     console.log("3 is less than 5");
// }

// // If you want to make a choice between options, you have other structures that 
// // are useful.
// if (7 < 5){
//     console.log("7 is less than 5");
// } else {
//     console.log("7 is NOT less than 5");
// }

// // a test for equality. 
// // greater than, less than, or equal to 6.

// let testNumber = 6;
// if(testNumber > 6){
//     console.log(`${testNumber} is greater than 6.`);
// } else {
//     if (testNumber < 6){
//         console.log(`${testNumber} is greater than 6.`);
//     } else {
//         console.log(`${testNumber} equal to 6.`);
//     }
// }


// as a rule, you want to avoid nested if/else statments.  There are two
// better approches:
// if-else if-esle
/*
let testNumber = 9;
if (testNumber < 6){
    console.log(`${testNumber} is less than 6.`);
} else if (testNumber == 6) {
    console.log(`${testNumber} is equal to 6.`);
} else {
    console.log(`${testNumber} is greater than 6.`);
}
*/

// make a grade genorator. Make a variable called testGrade.
//0-59 : F
//68-69 : D
//70-79 : C
//80-89 : B
//90-100 : A
/*
let gradeNumber = 89;
if (gradeNumber < 60){
    console.log(`F`);
} else if (gradeNumber < 70){
    console.log(`D`);
} else if (gradeNumber < 80){
    console.log(`C`);
} else if (gradeNumber < 90){
    console.log(`B`);
} else {(gradeNumber < 100)
    console.log(`A`);
}
*/
// Logical Operators:
// Modify or combine multiple logic statements
// AND: && -> Will return only when both statements are true
// OR:  || -> Will retun true when either statments are true
// NOT:  ! -> Flips the true/false value

// Clothing se;ector based on weather
// Two variables: temperature and participation
let temperature = 38;
let precipitation = false;

// list of options:
// T-shirt and shorts (above 75), T-shirt and pats (between 60 and 75),
// Long sleve shirt and pants(above 45), sweatshirt and pants (colder than 45),
// jacket instead of regular shirt, in parcipitation

if (temperature < 45){
    console.log("Sweatshirt and pants");
} else if (temperature < 60 && temperature > 44){
    console.log("Long Sleeve shirt and pants");
} else if (temperature < 75 && temperature > 59){
    console.log("T-shirt and pants");
} else if (temperature > 74){
    console.log("T-shirt and shorts");
} 

// These are notes on conditionals in programming

/* At its most basic level, a conditional statement is just "If -> then".
We will see many more complicated examples, but all of them rely on the idea
that you are checking if a condition is true, and then doing something 
based on the true/false nature of that condition.*/

// Conditional statements rely on some form of comparison.

/* Comparisons in javaScript, and most if not all programming languages
look like math equations to some extent.  
a < b (is a less than b?)
a > b (is a greater than b?)
a == b (is a equal to b?)
a <= b (is a less than or equal to b?)
a >= b (is a greater than or equal to b?)
*/

// examples:
// let a = 5;
// console.log(5 < 3);
// console.log(5 > 3);
// console.log(a == 5);
// console.log(a == "5");

// javaScript also has a "===", for "strict equality".  This means that 
// it will ask "Is a equal to b AND do a and b have the same data type?"

// console.log(a === "5")

// the last symbol we need to talk about before jumping into actual conditionals
// is "!".  "!" means "NOT"
// console.log(a != 3);

// you can compare strings just like you can compare with numbers
// console.log("Badin" > "Ross");
/* rules for string comparison:  (assuming > for our comparison)
1. Compare the first characters of each string.  
If the first character of the first string is greater than the first character
of the second string, return True.  If it is less than the first character of the 
second string, return False.  If they are equal, continue to next step.
2. Compare the second characters of each string, as described above.  
3. Continue until either string ends.
4. If both strings are equal AND have the same length, return false (they are equal)
5. If one string is longer, that string is greater than the other string
*/
// console.log("R" > "B");
// console.log("b" == "B");

/* Now that we know how comparisons work, we can look at conditionals. */
// An if statement allows you to "gate" code behind a condition being true.
// if (3 < 5){
//     console.log("3 is less than 5");
// }

//If you want to make a choice between options, you have other structures that
//are useful.
// if (7 < 5){
//     console.log("7 is less than 5");
// } else {
//     console.log("7 is NOT less than 5");
// }

// a test of equality.  We're going to check if testNumber is 
// greater than, less than, or equal to 6.  Using a nested if/else structure
// let testNumber = 2;
// if(testNumber > 6){
//     console.log(`${testNumber} is greater than 6.`);
// } else {
//     if (testNumber < 6){
//         console.log(`${testNumber} is less than 6.`);
//     } else {
//         console.log(`${testNumber} is equal to 6.`);
//     }
// }

// As a rule, you want to avoid nested if/else statements.  There are two
// better approaches: 
// if-else if-else
// let testNumber = 6;

// if (testNumber < 6){
//     console.log(`${testNumber} is less than 6.`);
// } else if (testNumber == 6) {
//     console.log(`${testNumber} is equal to 6.`);
// } else {
//     console.log(`${testNumber} is greater than 6.`);
// } 


// Make a grade generator.  Make a variable called testGrade. 
// 0-59 : F
// 60-69 : D
// 70-79: C
// 80-89: B
// 90-100: A

// let testGrade = 65;

// if (testGrade >= 90) {
//     console.log("A");
// } else if (testGrade >= 80){
//     console.log("B");
// } else if (testGrade >= 70) {
//     console.log("C");   
// }else if (testGrade >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }

// Logical Operators:
// Modify or combine multiple logic statements
// AND:  &&   -> will return "true" only when both statements are true
// OR:   ||   -> will return "true" when either statement is true
// NOT:  !    -> Flips the true/false value

// Clothing selector based on weather
// Two variables: temperature and preciptation
// let temperature = 85;
// let preciptation = false;

//List of options:
// T-shirt and shorts (above 75), T-shirt and pants (between 60 and 75), 
// Long sleeve shirt and pants(above 45), sweatshirt and pants (colder than 45), 
// jacket instead of regular shirt, if precipitation

// 60 < x < 75 -> temp < 75 && temp > 60


// BEWARE:  you must restate your checked variable each time.
//This will not work:
// (x == 35 || 15)
// This WILL work:
// (x == 35 || x == 15)

/* javaScript uses "truthy" and "falsy" values.
A truthy value will be treated the same as "true".
The following values are "truthy":
-true
-any not empty string (including "false")
-any number other than 0
-(we haven't talked about these): arrays, functions, and objects

The following values are "falsy":
-false
-0 (as a number) or 0n (BigInt)
-"" (an empty string)
-null
-undefined
-NaN

OR -> finds the first truthy value:
an example: */
// let testVariable = null || "banana" || 1 || false;
// console.log(testVariable);

// let testVariable2 = null || false || 0;
// console.log(testVariable2);

/* when could this be useful?  If you have a form that you need 
a user to fill out.

let name = USER_INPUT || "Unknown Name";
*/

/* can also be used to set up conditional alerts or functions
for example

let printSuccess = true;
printSuccess || alert("DID NOT PRINT");
!printSuccess || alert("Printed Successfully");
*/


/* AND (&&) finds the first "falsy" value
-evaluate from left to right
-converts the value to a boolean (based on truthy/falsyness)
-stops when it gets to the first falsy value
-if no values are falsy, returns last value
*/

// Examples:
// console.log(true && true && true && true);
// console.log(true && 0 && true && true);
// console.log(true && "false" && 5 && 3.14);

// && has a higher precendence than || 
// a && b || c && d == (a && b) || (c && d)
// if you want that or operation to combine b-c, 
// "a / b or c / d":
// a && (b || c) && d

//vv DO NOT DO THIS.  SERIOUSLY.  DON'T. vv
// some people use && instead of "if"
// e.g. 
// let x = 1;
// (x > 0) && alert("Greater than zero!");

// // while that worked, this is much more readable:
// let y = 1;
// if (y > 0){
//     alert("Greater than zero!");
// }

/*  NOT - !
! takes a single argument, and does the following:
1. Converts the value to a boolean type (true/false)
2. returns the opposite of the result of 1.
*/

// console.log(!NaN);
// console.log(!1);

// // because of this behavior, sometimes people will use !! to convert values to booleans

// console.log(!!NaN);

// //if you don't use the !!, you can do this same operation with Boolean():
// console.log(Boolean(NaN));

/* If we have a lot of possible test cases we want to check, it is frequently
better to use a "switch" instead of an if, else if chain.  

STRUCTURE:
switch(expression) {
    case x:
        // code goes here
        break; 
    case y: 
        // code goes here
        break;
    case z:
        // code goes here
        break;
    default:
        // code goes here
}

-The switch expression is evaluated
-the value of the expression is compared with the values of each case.
-If there is a match, the associated block of code is executed
-If there is no match, the default case is executed.
*/

// There is something called the getDay() method.  This returns the weekday
// as a number between 0 and 6.  We'll use a switch to convert this output to
// an actual "day";

let day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4: 
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6: 
        day = "Saturday";
        break;
    default:
        console.log("Not a date");
}

console.log(day);

// The Termany Operator allows you to write simple and concise if/else statements.

//The syntax or tis is:
// condition ? do this : elsedo this instead

