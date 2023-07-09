// Q.8 You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

//Solution
function integerArr(nums, k) {
    const n = nums.length;
    if (n === 1) {
      return 0;
    }
  
    nums.sort((a, b) => a - b);
    let minScore = nums[n - 1] - nums[0];
  
    const minElement = nums[0] + k;
    const maxElement = nums[n - 1] - k;
  
    for (let i = 0; i < n - 1; i++) {
      const minAdjusted = Math.min(minElement, nums[i + 1] - k);
      const maxAdjusted = Math.max(maxElement, nums[i] + k);
      minScore = Math.min(minScore, maxAdjusted - minAdjusted);
    }
  
    return minScore;
  }
  
  const nums = [1];
  const k = 0;
  const result = integerArr(nums, k);
  console.log(result); // Output: 0
  
// Note:  we first check if the length of nums is 1. If it is, the score is already minimized, so we return 0.Next, we sort the nums array in ascending order using the sort() method with a comparison function. We initialize the minScore variable with the difference between the last element (nums[n - 1]) and the first element (nums[0]), which represents the current score