// Q.6 Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

//Solution
function findAnagrams(s, p) {
  const result = [];
  const pFreq = {};
  const windowFreq = {};

  for (let char of p) {
    pFreq[char] = (pFreq[char] || 0) + 1;
  }

  let left = 0; // Left pointer of the window
  let right = 0; // Right pointer of the window
  let matched = 0; // Count of matched characters

  while (right < s.length) {
    const char = s[right];

    windowFreq[char] = (windowFreq[char] || 0) + 1;

    if (pFreq[char] !== undefined && windowFreq[char] <= pFreq[char]) {
      matched++;
    }

    if (right - left + 1 > p.length) {
      const leftChar = s[left];

      windowFreq[leftChar]--;

      if (
        pFreq[leftChar] !== undefined &&
        windowFreq[leftChar] < pFreq[leftChar]
      ) {
        matched--;
      }

      left++;
    }

    if (matched === p.length) {
      result.push(left);
    }

    right++;
  }

  return result;
}

//Here we check above function to see if

const s = "cbaebabacd";
const p = "abc";
const result = findAnagrams(s, p);
console.log(result); // Output: [0, 6]
