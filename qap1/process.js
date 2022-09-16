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
// This next line will create a new file at that exact time.
const fs = require("fs");
process.on("exit", function () {
  fs.writeFileSync(
    "./files/exitfile.txt",
    "I am only saved when the program exits"
  );
});

// We can also use the versions method to glean more in-depth information about the version of Node that is installed on the machine than the "node --v" command.
console.log(process.versions);
