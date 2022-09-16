// 1. Console:
// Console is a simplistic debugging tool similar to that seen in Javascript.
// It can write to a Node.js stream as well as a global stream accessed through the process method.
// Here we can see it printing the global object:

const consoleLog = () => {
  console.log(global);
};

// It can call methods to print messages that do not affect execution, such as the assert method, used to determine if value is or isn't truthy.
// It will only print when the value is falsey.

const consoleAssert = (a, b) => {
  console.assert(a); // We are passing a true value for 'a' below.
  console.assert(b); // Only this line should fail.
};
consoleAssert(true, false);

// The table method exists and can format data into tables:
const consoleTable = (a, b) => {
  data1 = { Name: a.userName, Job: a.userJob };
  data2 = { Name: b.userName, Job: b.userJob };
  console.table([data1, data2]);
};

const userGlen = { userName: "Glen", userJob: "Student" };
const userPeter = { userName: "Peter", userJob: "Teacher" };
consoleTable(userGlen, userPeter);
