// Lodash is a library that provides functions for common tasks found in programming with Javascript.
// To install dependencies:
// npm init -y
// npm i lodash

// By convention, Lodash uses the "lower dash" or underscore to refer to the module:
const _ = require("lodash");

// Here we can see the module version being assigned and called.
const version = _.VERSION;
console.log(version);

// Lodash methods like .first and .last allow us to return the first and last elements of an array:
const array = ["one", "two", "three"];
const first = _.first(array); // first is a module that calls on the array...
const last = _.last(array); // last is too.
console.log(first); // Prints "one"
console.log(last); // Prints "three"

// .random does what it says it does: generate a random number between two bounds:
const random = _.random(1, 10);
console.log(random); // Prints a random number

// Whereas .sample does the same but for elements from an array:
const array2 = ["one", "two", "three", "four"];
console.log(_.sample(array2)); // Prints random element from array2

// We can call a function multiple times using .times...
_.times(3, () => {
  console.log("Print me three times!"); //
});
let arr = _.times(4, () => _.random(2, 10)); // Combining with random...
console.log(arr); // To get arrays of four random numbers between 2 and 10.

// Range creates arrays too, but takes start, end and step parameters.
const range = _.range(0, 10, 2); // Start, end and step (increase by)
console.log(range); // 0, 2, 4, 6, 8 (Note end non-inclusive!)

// Delay can delay the execution of a function for a specified number of milliseconds.
const message = "Hey! I'm delayed. :)";
function delayMessage() {
  console.log(message);
}
_.delay(delayMessage, 1300);

console.log("Please wait for the delay."); // Even though this line is later, it should print before the delayed message because of the 1300 ms wait.
