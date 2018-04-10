var assert = require('assert');

// we need 5 test cases. 
let inputs = [
   "abc ab a",
   "",
   "one",
   "abc def ghi",
   "abc 234235 def"

]

let outputs = [
    "abc",
    "",
    "one",
    "ghi",
    "234235"
    ]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var arr = str.split(' '); //split the string into individual words
    var longest = "";
    for (var i = str.length - 1; i >= 0; i--) {
        if(longest.length < arr[i].length) { // is the string we're looking at the longest?
            longest = arr[i]; // if not update position in array
        }

    }
    return longest;

}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);

