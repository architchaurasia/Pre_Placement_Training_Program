// Q.4 Given a string calculate length of the string using recursion.

// Examples:
// Input : str = "abcd"
// Output :4

// Input : str = "GEEKSFORGEEKS"
// Output :13

//Solution
function calculateLength(str) {
  if (str === "" || str.length === 0) {
    return 0;
  }

  return 1 + calculateLength(str.slice(1));
}

console.log(calculateLength('abcd')); // Output: 4
console.log(calculateLength('GEEKSFORGEEKS')); // Output: 13
