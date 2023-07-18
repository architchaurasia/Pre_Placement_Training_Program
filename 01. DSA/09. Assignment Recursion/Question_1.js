// Q.1 Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

// An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

// **Example 1:**
// Input: n = 1

// Output: true

// **Example 2:**
// Input: n = 16

// Output: true

// **Example 3:**
// Input: n = 3

// Output: false

//Solution
function inPower(n) {
  if (n <= 0) {
    return false;
  }

  let count = 0;

  while (n > 0) {
    count += n & 1; 
    n >>= 1; // Right-shift by 1 to check the next number
  }

  return count === 1;
}

console.log(inPower(1)); // Output: true
console.log(inPower(16)); // Output: true
console.log(inPower(3)); // Output: false

