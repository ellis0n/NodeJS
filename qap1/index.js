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
