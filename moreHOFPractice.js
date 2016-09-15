/* MORE HIGHER ORDER PRACTICE

1. Pretend you've downloaded a library, and it comes with a function called 'find'.

You look up the documentation for that library online, and here's what it says about 'find':

find(list, predicate)

'find' takes in a list and a predicate (a callback) as parameters. It looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

Write an example of how you would call 'find', passing in whatever truth test you'd like and whatever sample list you want to make up. Write as a comment what you expect your example would return.



2. Here is a higher-order function defined for you:
var uniq = function(array) {
  return array.filter(function(element, index){
    var state = false;
    for (var j=0; j < index; j++){
      if (array[j] === element){
        state = true;
      }
    }
    return state === false;
  });
};


a) Add pseudo code comments to the code above, explaining what each line is doing


b) What does this function return? (a string, an object, a boolean, etc.)

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)


c) What does the callback to this function return? (a string, an object, a boolean, etc.)


d) In english, explain how this function works, as documentation would (see the 'find' problem description as an example). For example, include what it takes as parameters, what it does in words, and what it would return.


3. Write a function 'reject', which takes in an array, and passes each element and index of the array into a callback function. Return an array of just the elements for which the callback returned false.


*/ 
