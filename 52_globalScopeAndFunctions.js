//* Global Scope and Functions

//? Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords. Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Declare the myGlobal variable below this line

let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
