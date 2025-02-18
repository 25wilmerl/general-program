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

for (let i = 0; i < 21; i++) {
    if( i % 2 == 0){
        continue;
    }
    console.log(i);
}





//Summary:
// THREE KINDS OF LOOP: For, While,  Do...While
// A Do...While loop is the only one of these that MUST exacute at least once
// break - will eject from the loop altogether
// continue - skip the rest of the current iteration





