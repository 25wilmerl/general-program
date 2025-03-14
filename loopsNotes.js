/* Notes on Loops in javaScript */

/* Loopsare a great way for us to repeata set of steps.
if you have something you want to do multiple times in a row, or
until something happens, loops are an ideal solution

There are two general flavors of loop in programming
-while loop
-for loop

WHILE LOOPS:
while (Conditions){
    ///CODE GOES HERE
}

This code will repeat as long as that conditos is true.

exampls */
// let i = 0
// while (i < 3){
//     console.log(i);
//     i++; // Shorthand for i += i, which is in turn a shorthand for i = + 1
// }

/* A single time through a loop is called an iteration.
While loops can continue until their condition becomes falsy
Remember, 0 is falsy. */

// i is aleady 3, because of the prior loop
// while (i) {
//     console.log("banana");
//     i--;
// }

/* There is a second flavor of while loop, called a do... while loop
The primary difference between a do... while loop and a while loop, is 
that a do... while loop will always exacute atleast once.

DO... WHILE LOOP STRUCTURE:
do {
    ///CODE GOES HERE
} while (condition);
 */

// let a = 0;
// do{
//     console.log(a);
//     a += 1;
// } while (a < -1);

/* the other kind of loop is the FOR loop.
for loops are essentially jus fancy while loops, their syntax is more 
complicated, but they're also more commonly used. You are less likely
to set up an infinate loop when using a for loop.

FOR LOOP STRUCTURE:
for (begin; condition; step) {
    // CODE GOES HERE
}

example: */
// for (let j = 0; j < 5; j++){
//     console.log(`j = ${j}`);
// }

/* with either form of loop, as a general rule, if your condition is going
to be based on a NUMBER, you probably want to use: <, >, <=, >=.
==, != are likely to enable "miss" and accidentally make an infinate loop.

You'll also find that you'll sometimes be off by 1. Frequentaly he solution to this 
is just to change between < and <= OR > >=*/

/* You CAn skip elements of the for loop declaration. for example:

let i = 0

for(; i < 3; i++){
    console.log(1);
}

******************

for(let i = 0; i < 3;){
    console.log(i++);
}

******************

let i = 0

for(; i < 3 ;){
    console.log(i);
    i++;
}
    for(;;){
    //THIS IS AN INFINATE LOOP
}

*/

/*Break as a camand 
break is command that will imediatley exit you from a loop,
and advance to the next part of your code. You can put breaks in
as failsafes if you think you might create an infinate loop*/

// // Example 1: sum number from the user
// let sum = 0;
// while (true){
//     let value = +prompt("Enter a number", '');

//     if(!value){
//         break;
//     }

//     sum += value;
// }

// console.log('sum = ' + sum);

// Example 2: add numbers from 1 to give value WITH a timeout function
// let sum = 0;
// let max = +prompt("Add the number from 1 to what?");
// let now = Date.now();
// console.log(now);

// for (let i = 1; i <= max; i++){
//     sum += i;

//     if(Date.now() > now + 1000){
//         console.log("This took too long");
//         break;
//     }
// }

// console.log(sum);

/* CONTINUE asa command
Continue is like a "lighter" version of break. Instead of ejecting you 
out of the loop it just skips to the end of the current iteraction. */
//Example: print just the odd numbers from 1 to 20:

// for (let i = 0; i < 21; i++) {
//     if( i % 2 == 0){
//         continue;
//     }
//     console.log(i);
// }





//Summary:
// THREE KINDS OF LOOP: For, While,  Do...While
// A Do...While loop is the only one of these that MUST exacute at least once
// break - will eject from the loop altogether
// continue - skip the rest of the current iteration




/* ARRAYS
In programming, an array is a collection of values. Specifically, it's an 
"ordered" collection of values.

let arrayName = [item1, item2, item3, item4];

tomake an empty array, there are two approaches:
let fakeArray1 = new Array();
let fakeArray2 = [];
*/

// let fruits = ["Apples", "Bananas", "Orange", "Lemon", "Lychees"];
// console.log(fruits);

// console.log(fruits[3]); // "Lemon", b/c we start indexing from 0.

// fruits[3] = "Pineapple";
// console.log(fruits);

// // add strawberries
// fruits[5] = "strawberries";
// console.log(fruits);

// // find out how long an array is (how many elements are in it?).
// console.log(fruits.length);

// fruits[fruits.length] = "blueberry";
// console.log(fruits);

/* an array can store elements of any type. Including, mixing types
in the same array*/

// let exampleArray2 = ["Apple", 35, true, function() {console.log(`hello`);}, "array"];

// console.log(exampleArray2[0]);
// console.log(exampleArray2[1]);
// console.log(exampleArray2[3]);

/* do math or other oporations with the values in an array */
// function to calculate the diastance between 2 points on the x-y plane.
// distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)
// let obj1 = [3,5];
// let obj2 = [7,11];

// let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1]- obj1[1])**2);
// console.log(dist);


// let primes =[2, 3, 5, 7, 9, 11, 13, 17];
// let i = 0;
// while (i < primes.length){
//     console.log(primes[i]);
//     i++;
// }

// console.log(primes.at(-1));

// Array methods
// .pop() - finds the last element of the array and returns it, and deletes it 
// from the array.
// console.log(primes);
// console.log(primes.pop());
// console.log(primes);

//Here is a code snippet to find the sum of all primes
//less than 20. 
// let sum = 0;
// while (primes.length) {
//     sum += primes.pop();
//     console.log(primes, sum);
// }

// console.log(sum)

// The inverse of .pop() is .push()
// .push() adds an element to the end of the array.

// let fruits = ["apple", "lemon", "banana"];

// console.log(fruits);

// fruits.push("watermelon");

// console.log(fruits);

// The problem with pop and push, is that you can only modify the end of the array.
// If you want to modify the BEGINING of the array, you need different methods:

// console.log(fruits.shift());
// console.log(fruits);

// // unshift() - unshift is push but at the begining
// fruits.unshift("pineapple");
// console.log(fruits);

// // push and upshift can add multiple elements at once
// fruits.push("orange", "peach");
// fruits.unshift("kiwi", "grape");

// console.log(fruits);

// using loops with arrays.
// here's an "old" style of printing all od the array values.

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

//there is a different kind of way to do this , using a 
// for ...of loop:

// for (let fruit of fruits) {
//     console.log(fruits);
// }

/* omething to note about arrays.
array.length is returning the alue of the last index + 1, it is not actually
counting the number of values in the array*/

// let grades = ["A", "A", "B", , "B", "A"];
// console.log(grades);
// console.log(grades.length);

// let badArray = [];
// badArray[314] = "pie";
// console.log(badArray.length);
// console.log(badArray);

/* Multidimentional Arrays
A Multidimentional Array, is a array that is, in turn,
made up of more arrays.
*/


// an array holding XY coordinates of 5 points:
// 3,4 and 1,2 and 9,15 and 37,11 and 215,1
let coordinates = [
    [3,4],
    [1,2],
    [9,15],
    [37,11],
    [215,1]
]
console.log(coordinates[4][0]);

coordinates[4][0] = 21;

console.log(coordinates);


/*methods are funtions tied to a dataType.

e.g. arr.pop() is the pop method, whih removes the last time of the array

-We've learned 4 array methods: pop, push, shift and unshift
- arr.length is not tehnically a method, sine it doesn't carry the ()
-arr.at() which works like the [] notation, but allows you to use negative indices
ex: arr = [a,b,c,d,e,f,g] => arr.at(-2) => "f"

New Methods:
.join() allows you to combine the terms of an array into a string,
and you can specify the seporator
*/

//Example:
// let arrayForString =["A", "B", "C", "D"];
// console.log(arrayForString.join()); // This aoutput a single string connected by commas;

// console.log(arrayForString.join(" o.0 "));

/* More metods:
.concat() => concatenate, ombine arrays
*/

let mikesSons = ["Greg", "Peter", "Bobby"];
carolsDuaghters = ["Marica", "Jan", "Cindy"];

/* final 2 methods for now:
-.splice() and .slice()

.splice() adds new items to an array
.slice() removes a piece of an array
*/

let fruits = ["Apple", "Orange", "Banana", "Kiwi"];
fruits.splice(2,0, "Mango", "Papaya");
console.log(fruits);
// //.splice(targetIndex, howManyItemsemovedAfterInserted, stuffToBeAdded...)

// //You can actually use splice to delete items from the middle of an array.
// fruits.splice(3,1);
// console.log(fruits);

// .slice returns a new array from a subsection (or slice) of an original array.
let fruitsILike = fruits.slice(1,5);
console.log(fruitsILike);

/* Strings actually behave like an array and hvae similar methids.
string.length => length of the string
*/

let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(alpha.charAt(2));
console.log(alpha.at(7)); // At allows negative indiies, while charAt does not.
console.log(alpha[12]);

/* 
At() - allows negative indicies
IF you put in a value that doesn't exist, like:
alpha[28] => undfifned
alpha. charAt => ""

ALSO: observe this example:*/

// alpha[1] = "Q";
// console.log(alpha); // [] are "read-only".

/* 3 methods to remove a part of a string:
.slice(start, end)
.substring(start, end)   //values less than 0 are treated as 0 
^ for both of these, if yu omit the end value, it goes to the end of the string^
.substr(start, length)*/


let testString = "The quick brown fox jumped over the lazy dog"

let string1 = testString.slice(-5, -1);
let string2 = testString.substring(-5, -1);
let string3 = testString.substr(3,10);

console.log(string1);
console.log(string2);
console.log(string3);

/* two final string methods:
.toUpperCase() = makes the string all upper case
.toLowerCase() = makes the string all lower case */

let testString2 = "ThE QuIcK Brown FOX jumPED OveR ThE LAZy Dog";

console.log(testString2.toUpperCase());
console.log(testString2.toLowerCase());