var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [1, 2, 3, 4],
    [0, 1],
    ["a", 2, 3],
    [],
    [2, 3, 4,]
]

let outputs = [
    10,
    1,
    5,
    0,
    9
]
/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {

    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            num += arr[i]
        }
    }
    return num;
}






function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
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