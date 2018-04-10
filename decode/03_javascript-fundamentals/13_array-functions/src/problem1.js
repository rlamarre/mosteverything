// You are not allowed to use a for loop or a while loops for any of these questions. Instead, use filter, map, etc...

function removeEvens(lst) {
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed

     return lst.filter(x => { return (x % 2 !== 0) })

     // return lst.filter(num => num % 2 != 0)
}

// with for loop

    // function removeEvens(lst) {
    //     var ret = []
    //     for(var i = 0; i < lst.length; i++) {
    //         if(lst[i] % 2 == 1) {
    //             ret.push(lst[i])
    //         }
    //     }
    //     return ret;
    // }

    function keepLong(lst) {
     // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
        return lst.filter(isLong) 
    }
    
    var isLong = function (str){
      if (str.length > 5) { return true }
    }

function greet(lst) {
   
        return lst.map(sayHello);
     
        
        function sayHello (str) {
          return "Hello " + str;
        }
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
}
// lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
    function greetLong(lst) {

        var whom = () => {return lst.filter(isLong)};
         
        return whom().map(sayHello);   
         
         function sayHello (str) {
           return "Hello " + str;
         }
         function isLong (str){
        return str.length >= 4
     } 
     }

     // var longNames = lst.filter(name => name.length >= 4)
    //  return longNames.map(name => "Hello " + name)

    //  function greetLong(lst) {
    //      var ret = []
    //      for(var i=o; i < lst.length; i++) {
    //           if(lst.length >= 4) {
    //               ret.push("Hello " + lst [i])
    //           }
            
    //      }
    //      return ret;
    //  }

function allLong(lst) {
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.

     return lst.every(str => str.length >= 5); // takes a function as a parameter

       // same thing in a for loop

        // var ret = true;
        // for(var i = 0; i < lst.length; i++) {
        //     if(lst[i].length <5) {
        //         return false;
        //     }
        // }
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};
