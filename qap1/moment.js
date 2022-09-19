// Moment is a library for dates and times: validating, parsing, displaying and manipulating them, specifically.
// Like Lodash, you install dependencies:
// npm init -y
// npm i moment

// We have to initialize it also:
moment = require("moment");

// Obvious benefits include access the current time and formatting it:
console.log(moment().format()); // Prints the whole date string
console.log(moment().format("dddd")); // Prints the day only
console.log(moment().format("MMM Do YYYY")); // Prints formatted date value
console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // Ah, so readable!

// We can find out time using relative terms...
console.log(moment().startOf("day").fromNow()); // When did today start?
console.log(moment().endOf("day").fromNow()); // When does it end?

// And the calendar time method lets us format in a very readable manner:

console.log(moment().add(10, "days").calendar()); // Ten days away...
console.log(moment().add(1, "month").calendar()); // One month from today!
console.log(moment().subtract(130, "year").calendar()); // 1892 (a QV beer classic)
