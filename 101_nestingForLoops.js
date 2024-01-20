//* Nesting For Loops

//? Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

console.log(sum([1], 0));
