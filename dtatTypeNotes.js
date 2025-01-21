// There will be notes on data types.

// there are 8 data types in javaScript
/*
1. numbers (both integers and floating point (decimals))
        -in addition to traditional numbers, the number data type 
        includes Infinity and NaN (Not a Number)
2. BigInt */
console.log(9007199254740991 + 1); //9007199254740991
console.log(9007199254740991 + 2); //9007199254740991
/*for very large numbers javaScript starts to apprximate the value. 
we can override this with a BigInt which we form but adding a lowercase 'n'
to the end of the number

3. String
Letters, words, characters, numbers, symbols, that are treated like "text".
*/
console.log(2 + 3);
console.log("2" + "3");

// + with strings produces "concatenation": connecting two symbols one
// after the other
/* Strings are generally formed by encapsulating symbols in quotation 
marks. In javaScript, there are three kinds of quotation marks that 
you can use.

"Hello" - double quotes
'Hello' - single quotes
`hello` - backticks.
*/

console.log("Hello, world!");
console.log('Hello, world!');
console.log("This is Mr. Smith's output");
console.log('"Nevermore", quoth the Raven');

// if your string conatins an apostrophe, use double quotes
// if your string contains a quotation, use single quotes

// Backsticks allow you enbed variables into a string
let myName = "Steve"
console.log(`Hello, ${myName}`);

// you can also do math or other operations inside of curly braces:
console.log(`2 + 3 = ${2 + 3}`);

// Many programing languages have a 'char' datatype, representing 
// a single character, javaScript does not.

/* Boolean
Booleanis named for Google Boole, who did a lot of work with formal logic
Namely, ways to make decisions using true and false statements. The boolean
datatype can hold only 2 values: true OR false.*/

/* Null
This is a special datatype. It contains only 1 valus: null.
"null" in javaScript means "nothing", "empty", or "value unknown"

/* Undefined
This is another special datatype. It contains only 1 value
undefined. "Undefined" in javaScript means that the value has not 
been assigned.

let age;  <- here a variable was declaired but not defined, so it is "Undefined".

Out last 2 datatypes would be Objects and Symbols, which are related, 
and are likely beyond the scope of this class.

If you need to know the type of a vaiable, you canuse the type of () function.*/

console.log(typeof{"word"});
console.log(typeof{365});
