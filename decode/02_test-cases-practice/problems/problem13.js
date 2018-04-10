var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "RACECAR",
  "AMANAPLANACANALPANAMA",
  "nope",
  "RADAR",
  "OTHERWISE"

]

let outputs = [
  true,
  true,
  false,
  true,
  false


]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    
   let theReversedString = reverseString(str);

//    if (theReversedString === str) {
//        return true
//    } else {
//        return false
//    }

        return (theReversedString === str)
} 

let reverseString = (str)=>{
    console.log("original string is: ", str);
    // create empty string to host reversed string

    let newString = "";

    // create for loop

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // new string = new string + i position
        }
        
        console.log("new string is: ", newString)

    return newString
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

