/*
A function is a set of instructions that are all packaged together
This is particularly useful is you need to reuse those instructions ,
espciall if you are reusing them in multiple places, or with
various "starting" conditions.

function name, parameters, arguments

function functionName(parameter1, parameter2, etc){
code
}

functionName(argument1, argument2, etc);
*/

// make a function that returns a messga ebaout a favorite animal.

function favoriteAnimal(animal){
    return animal + " is my favorite animal!";
}

console.log(favoriteAnimal("jellyfish"));
console.log(favoriteAnimal("Husky"));

// What happens inside a function is frequently invisble to the outside
// world. This is refered to in programming as "scope"
// Local scope: within a function
// Global scope: the main program

//an example to deostrate scope
let test1 = 1
let test2 = 5

function add1(num){
    test2 = test2 + 1
    return num + 1;
}

console.log(add1(test1));
console.log(tes1);
console.log(test2);

// To summarize: a function can change the value of a global variable, but
// only if that variable is used, BY NAME, within the function. Variables
// that are passed as arguments to the unction, will remain unchanged.

// we can make optional parameters.

function greetings(name = "Mr. Wilmer"){
    console.log(`Hello, ${name}`);
}

greetings("mr. Wilmer");
greetings("Mr. Man");
greetings("Mr. Jack");
greetings("Mr. John");