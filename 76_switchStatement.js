//* Selecting from Many Options with Switch Statements

//? Write a switch statement which tests val and sets answer for the following conditions

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return (answer = "alpha");
      break;
    case 2:
      return (answer = "beta");
      break;
    case 3:
      return (answer = "gamma");
      break;
    case 4:
      return (answer = "delta");
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(4));
