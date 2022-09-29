// Core Modules in Node Js
console.log("Core modules in Node JS:");
console.log();

// 1. Console:
// Console is a simplistic debugging tool similar to that seen in Javascript.
// It can write to a Node.js stream as well as a global stream accessed through the process method.
const consoleLog = () => {
  console.log();
  console.log(global);
};
consoleLog();

// It can call methods to print messages that do not affect execution, such as the assert method, used to determine if value is or isn't truthy:
const consoleAssert = () => {
  trueValue = true;
  falseValue = false;
  console.log();
  console.assert(trueValue); // Nothing will print when executed as value is truthy
  console.assert(falseValue); // "Assertion failed"
};
consoleAssert();

// The table method exists and can format data into tables:
const consoleTable = (a, b) => {
  data1 = { Name: a.userName, Job: a.userJob };
  data2 = { Name: b.userName, Job: b.userJob };
  console.table([data1, data2]);
};
const userGlen = { userName: "Glen", userJob: "Student" };
const userPeter = { userName: "Peter", userJob: "Teacher" };
consoleTable(userGlen, userPeter);

// 2. OS:
// The OS module allows the user to access methods and properties relevant to the operating system of the computer being used. It has to be initialized with the "require" keyword, like many core methods.
const os = require("os");

// Common uses are in accessing the type of OS and its versioning...
console.log(os.type());
console.log(os.version());

//... as well as information about hardware such as accessible or total memory, CPU architecture, current core status, system uptime, constants and much more.
console.log(os.cpus());
console.log(os.homedir());

// We can pull out, format and display relevant info gathered from these methods:
const yourPC = os.cpus()[0]; // We only need the first index of the method's array
console.log(yourPC);
console.log(`Model: ${yourPC.model}`);
console.log(`Speed: ${yourPC.speed} MHz`);

// 3. File system:
// File system allows us to access and work with the file systems on the server computer. It needs to be initialized:
const fs = require("fs");

// It allows us to read files state...
fs.readFile("./files/lorem.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ... and format them to UTF-8 from the unreadable buffered state.
// NOTE: The asynchronous nature of node means the rest of the script will run while the program accesses these files. In this case, they will print at the end.
fs.readFile("./files/lorem.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// As well as write a new file, or overwrite if the file and content if extant:
fs.writeFile(
  "./files/newfile.txt",
  "This file is generated or overwritten on every save!",
  function (err) {
    if (err) throw err;
  }
);

// The append method attaches new content to the end of the file called. You can also delete, rename and upload files, but we will stick to append for now:
fs.appendFile(
  "./files/newfile.txt",
  " These words were appended.",
  function (err) {
    if (err) throw err;
  }
);

// 4. Process:
// Process tells us about, and allows us to control, the current Node process/runtime.
// Process is an instance of EventEmitter.
// This can be helpful for exception handling, such as with uncaughtException, though the documentation cautions against this.
process.on("uncaughtException", (err) => {
  console.error(`Oops! An uncaught error: ${err}`);
  process.exit(1); // In keeping with guidance, we should avoid continuing to run after an error was thrown except as a last measure in bugfixing
});

// Trying to read a file that doesn't exist should throw an error...
// NOTE: The following must be uncommented to run as this breaks our program.
// fs.readFile("./files/nofile.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data); // This will never print as there is no data.
// });

// There are many methods to know, but the other most commonly used one is the exit method.
// Exit event will be fired whenever the process is about to exit.
// This next line will create a new file whenever the program exits.
process.on("exit", function () {
  fs.writeFileSync(
    "./files/exitfile.txt",
    "I am only saved when the program exits"
  );
});

// We can also use the versions method to glean more in-depth information about the version of Node that is installed on the machine than the "node --v" command.
console.log(process.versions);

//5.  Path:
// Allows us to access and work with file directories.
// Path module works differently depending on which operating system is in use.
// Methods allow us to (among other things) access the file name and its extension type as well as parse path strings from objects (and vice-versa:
const path = require("path");
console.log(path.dirname(__filename)); // __filename is the current file name object
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

// We can also use the join module in tandem with the file-system module to create dynamic file pathing and avoid hardcoding values.
fs.readFile(path.join(__dirname, "files", "lorem.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// isAbsolute method can evaluate if a path is absolute (whether a file can be located with contents of string) and return a true/false boolean.
console.log(path.isAbsolute("/index.js")); // Prints true
console.log(path.isAbsolute("qap1/index.js")); // Prints false, no trailing pathing

//Path can do a lot more but for the purposes of demoing requires a somewhat more elaborate file structure than I have time to make!

// There are many more modules and objects to consider, and even these examples hardly explain what the above do.

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
