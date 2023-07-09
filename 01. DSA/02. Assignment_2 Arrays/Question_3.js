// Q.3 We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

//Solution
function findLHS(nums) {
    const numFreq = new Map();
    let maxLength = 0;
  
    for (const num of nums) {
      numFreq.set(num, (numFreq.get(num) || 0) + 1);
    }

    for (const [num, freq] of numFreq.entries()) {
      if (numFreq.has(num + 1)) {
        const currentLength = freq + numFreq.get(num + 1);
        maxLength = Math.max(maxLength, currentLength);
      }
      if (numFreq.has(num - 1)) {
        const currentLength = freq + numFreq.get(num - 1);
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  
    return maxLength;
  }
  
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = findLHS(nums);
  console.log(result); // Output: 5


  //Note: We iterate through the array twice: once to count the frequencies and once to calculate the lengths of the subsequences.




