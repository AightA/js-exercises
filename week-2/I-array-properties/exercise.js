/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(arr) {
  if (arr.lenght === 0) {
    return true;
  } else {
    return false;
  }
}

/*
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

module.exports = {
  isEmpty
};

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
