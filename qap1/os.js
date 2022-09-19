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

const yourPC = os.cpus()[0]; // This lets us select only the initial index
console.log(`Model: ${yourPC.model}`);
console.log(`Speed: ${yourPC.speed} MHz`);
