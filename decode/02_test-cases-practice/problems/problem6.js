// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["mult", 2, 3],
  ["sub", 9, 5],
  ["add", 4, 7],
  ["mult", 1, 5],
]

let outputs = [
  30,
  undefined,
  6,
  4,
  11,
  5
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
    
// seperate elements in array
  let a = arr[0]
  let b = arr[1]
  let c = arr[2]

// say elements in array
console.log(a, b, c)


if (a === "add") {
  console.log(a);
  console.log(b+c);
  return b + c
} else if (a === "sub") {
  console.log(a);
  console.log(b - c);
  return b - c
} else if (a === "mult") {
  console.log(a);
  console.log(b * c);
  return b * c
} else {
  return undefined
}
}

// f(inputs[1])

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
runTest(5);
