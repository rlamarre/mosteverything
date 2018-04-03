var assert = require('assert');

// we need 5 test cases.
let inputs = [
"three",
"",
"fervent",
"wild",
"extra"
]

let outputs = [
  "e",
  undefined,
  "t",
  "d",
  "a"
]

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
    //    str = str[0].slice(-1); 

    /* ??? why does line 22 not do the same thing as line 26? ??? */

    // str = str.charAt(str.length-1)
//   console.log("at first string is: ", str);
//   return str;

// Aisha's solution

var lastLetter = str[str.length - 1];

if (lastLetter === "") {
    return undefined; 
} else {
    return lastLetter;
}
}

// console.log("now string is: ", f(inputs));
// console.log(str);

function runTest(i) {
    var expected = outputs[i];
    console.log("expected: ", expected);
    var actual = f(inputs[i]);
    console.log("actual: ", actual);

    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
