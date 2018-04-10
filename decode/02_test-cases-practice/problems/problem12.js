var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [0,1,2,3], [0,1,2,3,4],
  [1,2,3], [1,2,3,4],

]

let outputs = [
  
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:
uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,4,5]
uniqueElements([[1,2,3], [1,2,3]]); // []
uniqueElements([2,3]); // undefined, not arrays
*/

    function f(arr1, arr2) {
        var newArray = [];

        if (arr1.constructor !== Array || arr2.constructor !== Array){
            return undefined
        }

        for (var i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) === -1) { //checking if the values in array 1 are unique compared to array 2 if yes - will return -1
                newArray.push(arr1[i]); // pushes -1 values into new array
            }
        }
        for (var i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) { //checking if the values in array 2, are they unique compared to array 1, will return -1
                newArray.push(arr2[i]);
            }
        }
        return newArray;
     
     
     
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

console.log("test cases passed");