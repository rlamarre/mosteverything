var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [5, 3],
  [0, 2],
  [8, -7]
]

let outputs = [
  6,
  0,
  8,
  2,
  1
]

console.log("test", inputs[0]);

let firstArray = inputs[0];

console.log("test stored in variable", firstArray)

let sum = firstArray.reduce(add, 0);

function add(a,b) {
  return a + b;
}

console.log("test solution", sum);

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/


function f(arr) {
let sum = arr.reduce(add, 0);

  function add(a,b) {
    return a + b;
  }
  
  return add
}

console.log(f(arr));

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);
// runTest(5);
// runTest(6);
// console.log("test cases passed");