function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
console.log(square(decrement(square(decrement(3)))));

var z = decrement(3);
var y = square(z);
var x = decrement(y);
console.log(square(x));

// #2
decrement(decrement(square(square(3))))
var z = square(3);
var y = square(z);
var x = decrement(y);
console.log(decrement(x))

// #3
duplicateString(reverseString("hello"))

var rev = reverseString("hello");
console.log(duplicateString(rev))

// #4
reverseString(duplicateString(duplicateString("foo")))

var dup = duplicateString("foo");
var dupTwo = duplicateString(dup);
console.log(reverseString(dupTwo))