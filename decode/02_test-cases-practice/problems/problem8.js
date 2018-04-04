var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello",
  "goodbye",
  "goodnight",
  "abcd",
  "sleep"
]

let outputs = [
  "olleh",
  "eybdoog",
  "thgindoog",
  "dcba",
  "peels"
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(str) {
    console.log("original string is: ", str);
    // create empty string to host reversed string

    let newString = "";

    // create for loop

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // new string = new string + i position
    }
    console.log("reversed string is: ", newString)
    return newString;
}

// f(inputs[0])

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

