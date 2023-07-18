// Q.7 Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***

// *S = “ABC”*

// ***Output:***

// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***

// *S = “XY”*

// ***Output:***

// *“XY”, “YX”*

//Solution
function permutationAll(str) {
  const result = [];

  // Helper function to generate permutations
  function generatePermutations(str, current = "") {
    if (str.length === 0) {
      result.push(current); // Found a permutation
      return;
    }

    for (let i = 0; i < str.length; i++) {
      const newStr = str.slice(0, i) + str.slice(i + 1);
      generatePermutations(newStr, current + str[i]); // Recursively generate permutations
    }
  }

  generatePermutations(str);
  return result;
}

console.log(permutationAll("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(permutationAll("XY")); // Output: ["XY", "YX"]
