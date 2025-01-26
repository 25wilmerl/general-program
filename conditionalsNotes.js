// These are notes on conditionals in programing

/* At its most basi levek, a conditioal statement is just "if" -> "then".
We will see many more complicated examples, but all of them rely on the idea
that you are checking if a condition is trrue, and then doing something
based on the true/false nature of that condition.*/

// Conditional statements rely on some form of comparison.

/* Comparisons in javaScript, and most if not all progamming languages
look like math equations to some extent.
a < b ( is a less than b?)
a > b (is a greater than b?)
a == b (is a equal to b?)
a <= b (is a less than or equal to b?)
a >= b (is a greater than or equal to b?)
*/

// examples:
let a = 5
console.log(5 < 3);
console.log(5 > 3);
console.log(a == 5);
console.log(a == "5");

// javaScript has a "===", for  "stricy equality". This means that
// it will ask "Is a equal to b And do a and b have the same data type"?

console.log(a === "5");

// the last symbol we need to talk about before jumping into actual coditionals
// is "!", "!" means "NOT"
console.log(a != 3);

// you can compare strings just like you can compare numbers
console.log("Badin" > "Ross");
/* rules for srting comparison:
1. Compare the first characters of each string.
If the firstcharacter of the first string is greater than the first character
of the second string, return True. If it is less than the first character of the
second string, return False. If they are equal, continue to next step.
2. Compare the second character or each string, as desibed above.
3. Continue until either string ends.
4. If both strings are equal AND have the same length, return false (they can equal)
5. If one string is longer, that string is grter than the other string
*/
console.log("R" > "B");
console.log("b" == "B");

/* Now that we know how comparisons work, we can look at conditionals. */
// An if statement allows you to "gate" code behind a condition being true.
if (3 < 5){
    console.log("3 is less than 5");
}

// If you want to make a choice between options, you have other structures that 
// are useful.
if (7 < 5){
    console.log("7 is less than 5");
} else {
    console.log("7 is NOT less than 5");
}

// a test for equality. 
let testNumber = 6;
if(testNumber >)
