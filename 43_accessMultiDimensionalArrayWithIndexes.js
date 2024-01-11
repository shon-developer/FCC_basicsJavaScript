//* Access Multi-Dimensional Arrays With Indexes

//? Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
  [1, 2, 3], // subarray [0]
  [4, 5, 6], // subarray [1]
  [7, 8, 9], // subarray [2]
  [[10, 11, 12], 13, 14], // subarray [3]
];

const myData = myArray[2][1];
console.log(myData);
