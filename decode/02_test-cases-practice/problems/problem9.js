var assert = require('assert');

// we need 5 test cases. 
let inputs = [
   ["hi", "hello"],
   ["", ""],
    
]

let outputs = [
    "hello"
    ]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(arr) {
    console.log("the original string says: ", arr)
    console.log("first word length", arr[0].length)
    console.log("second word ", arr[1])

   if (arr.includes('') === true) {
       return ''
   } else if (arr[0].length > arr[1].length){
        console.log(arr[0]);
        return arr[0];
   } else if (arr[0].length === arr[1].length){
       return arr[1]
   }
     } else return arr[1];
    }



f(inputs[1])
console.log(f(inputs[1]))

// function runTest(i) {
//     if(i > inputs.length) throw new Error("You do not have enough test cases");
//     var expected = outputs[i];
//     var actual = f(inputs[i]);
//     assert.deepEqual(actual, expected);
// }

// runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);

