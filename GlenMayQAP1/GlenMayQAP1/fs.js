// 3. File system:
// File system allows us to access and work with the file systems on the server computer. It needs to be initialized:
const fs = require("fs");

// It allows us to read files state...
fs.readFile("./files/lorem.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ... and format them to UTF-8 from the unreadable buffered state.
fs.readFile("./files/lorem.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// We can also write a new file, or overwrite if the file and content are extant:
fs.writeFile(
  "./files/newfile.txt",
  "This file is generated or overwritten on every save!",
  function (err) {
    if (err) throw err;
  }
);

// The append method attaches new content to the end of the file called upon...

fs.appendFile(
  "./files/newfile.txt",
  " These words were appended.",
  function (err) {
    if (err) throw err;
  }
);
