//* Local Scope and Functions

//? The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

//* The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
