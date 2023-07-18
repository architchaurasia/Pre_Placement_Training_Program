// .2 Given a number n, find the sum of the first natural numbers.

// **Example 1:**

// Input: n = 3

// Output: 6

// **Example 2:**

// Input  : 5

// Output : 15

//Solution
function naturalNumber(n) {
  return (n * (n + 1)) / 2;
}

console.log(naturalNumber(3)); // Output: 6
console.log(naturalNumber(5)); // Output: 15
