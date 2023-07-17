// Q.5 We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

// Examples :
// Input  : S = "abcab"
// Output : 7
// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

// Input  : S = "aba"
// Output : 4
// The substrings are a, b, a and aba

//Solution
function countAllContiguous(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(countAllContiguous("abcab")); // Output: 7
console.log(countAllContiguous("aba")); // Output: 4
