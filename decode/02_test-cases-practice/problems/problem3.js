var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  ['not a number', 3],
  [0, 2],
  [8, -7]
]

let outputs = [
  6,
  0,
  undefined,
  2,
  1
]

// console.log("test", inputs[0]);

// let firstArray = inputs[0];

// console.log("test stored in variable", firstArray)

// let sum = firstArray.reduce(add, 0);

// function add(a,b) {
//   return a + b;
// }

// console.log("test solution", sum);

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/


function f(arr) {

  let a = arr[0]
  let b = arr[1]
  // Testing the inputs
  console.log('NewTest')
  console.log ('a',a)
  console.log ('b',b)

  // Checking the type
  if(IsNumber(a) === false){return undefined}
  if(IsNumber(b) === false){return undefined}

  // Testing the ouputs
  let result = add(a,b)
  console.log ('result',result)

  return result

  // Defining function 
  function add(a,b) {
    return a + b;
  }

  function IsNumber(x){
    if(typeof x === 'number'){
      return true
    }
    // Here is a test
    console.log('WARNING !!! Not a number')
    return false
  }
}


function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
// runTest(5);
// runTest(6);
// console.log("test cases passed");