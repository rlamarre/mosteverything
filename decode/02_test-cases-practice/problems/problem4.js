var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["oof", 1],
  ["ohman", 4],
  ["herewego", 6],
  ["um", 1],
  ["seven", 2],
  ["eight", 0]
]

let outputs = [
  "o",
  undefined,
  "o",
  "n",
  "g",
  "m",
  "v",
  "e"
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(str, num) {
  
  var word = str;

  console.log("word equals", word)
  
  var position = num;

  console.log("position equals ", position);

  if (str === "") {
    return undefined
  } 
  
  // say word at first position of array
    console.log("say word ", word);
  // say letter at specificed position in this word
    //say letter at position stated in position 1 of original array

    console.log("say letter ", word.charAt(num));
    return (word.charAt(num));

    
}

// f(inputs[0])

function runTest(i) {
    var expected = outputs[i];
    console.log("expected", expected)
    var input = inputs[i]; // ["hello", 4],
    var actual = f(input[0], input[1]);
    console.log("actual", actual)

    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
