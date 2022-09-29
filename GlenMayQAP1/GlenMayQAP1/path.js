//5.  Path:
const fs = require("fs");
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
  console.log(data); // Remember, this prints at the end  thanks to callbacks.
});

// isAbsolute method can evaluate if a path is absolute (whether a file can be located with contents of string) and return a true/false boolean.
console.log(path.isAbsolute("/index.js")); // Prints true
console.log(path.isAbsolute("qap1/index.js")); // Prints false, no trailing pathing

// Path can do a lot more but for the purposes of demoing requires a somewhat more elaborate file structure than I have time to make!
