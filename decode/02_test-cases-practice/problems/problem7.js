var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["hi", 3],
    ["bye", 8],
    ["mary", 2],
    [4, 1],
    ["a", -3],
    ["donkey", 0],
    ["that'swhatyougetfordatinganitalian", 1]
]

let outputs = [
    "hihihi",
    "byebyebyebyebyebyebyebye",
    "marymary",
    undefined,
    "",
    "",
    "that'swhatyougetfordatinganitalian"

]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
// function sayAgain(str, num) {
//     return str.repeat(num);  

function f(arr) {
    console.log("what is arr: ", arr)
    // store string in variable
    let string = arr[0]
    let num = arr[1]
    // repeat string num of times stated in array
    if (IsGoodNumber(num) === false) {return ''}
    if (IsString (string) === false){return undefined}
    return string.repeat(arr[1])
    function IsGoodNumber(x) {
        if (Math.sign(x) === -1 || Math.sign(x) === 0) {
            return false
        } else { 
            return true 
        }
    }
    function IsString(x){
        if ( typeof x === 'string' ){
            return true
        }else{ 
            return false
        }
    }
}

    // f(inputs[0]);
    // console.log("result of function: ", f(inputs[0]))

    function runTest(i) {
        if (i > inputs.length) throw new Error("You do not have enough test cases");
        var expected = outputs[i];
        console.log("expected: ", expected)
        var actual = f(inputs[i]);
        console.log("actual: ", actual)

        assert.deepEqual(actual, expected);
    }

    runTest(0);
   runTest(1);
   runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);