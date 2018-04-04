var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello world",
  "make the noise stop",
  "please god",
  "thank you",
  "you're welcome"
]

let outputs = [
  "Hello World",
  "Make The Noise Stop",
  "Please God",
  "Thank You",
  "You're Welcome"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
// function f(str) {
//     //split string
//     console.log("string to split: ", str);
//     var words = str.split(" ");
//     console.log(words);
//     return words;

//     console.log(words);

//     //make words uppercase

//     words.toUpperCase();

//     console.log("words are uppercase", words);

//     return words
// }

function f(str) {
    let tempStr = str.toLowerCase();
    let arr = tempStr.split( ' ' )
    //console.log(arr)
    //tempStr = tempStr.slice(1,tempStr.length)
    //console.log('a',tempStr)
    for (let i = 0; i < arr.length ; i++){
        arr[i] = arr[i][0].toUpperCase()  + arr[i].slice(1,arr[i].length)  
    }
    console.log(arr.join(" "))
 return arr.join(" ")

console.log(f(inputs[0]))

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

