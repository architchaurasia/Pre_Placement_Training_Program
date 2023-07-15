// Q.7 Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

//Solution
function decodeString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "]") {
      let substring = "";

      while (stack[stack.length - 1] !== "[") {
        substring = stack.pop() + substring;
      }

      stack.pop();

      let count = "";

      while (stack.length && !isNaN(stack[stack.length - 1])) {
        count = stack.pop() + count;
      }

      stack.push(substring.repeat(parseInt(count, 10)));
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

//Here above we can check function above

const s = "3[a]2[bc]";
const result = decodeString(s);
console.log(result); // Output: "aaabcbc"
