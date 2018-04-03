var assert = require('assert');

// we need 5 test cases. I provided 1 input
let inputs = [
  "",
  "alsoand",
  "betabrand",
  "cardera",
  "definitely"
]

let outputs = [
  undefined,
  "a",
  "b",
  "c",
  "d"
]

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str[i].charAt(0));
  }
}

f(inputs);

console.log("we have inputs")
console.log("now let's run the function")


function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    console.log("what is: " + actual);

    assert.deepEqual(actual, expected);
}

console.log("what is: " + actual);


runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);
