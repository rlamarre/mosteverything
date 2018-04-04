var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [1, 4],
  [6, 8],
  [7, 3],
  [9, 3],
]

let outputs = [
  14,
  4,
  48,
  21,
  27
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
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
    let result = multiply(a,b)
    console.log ('result', result)
  
    return result
  
    // Defining function 
    function multiply(a,b) {
      return a * b;
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
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("test cases passed");