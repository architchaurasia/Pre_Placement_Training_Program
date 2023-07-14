// Q.4 Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

//Solution
function maxLength(nums) {
  const map = new Map(); // Map to store the running sum and its corresponding index
  let maxLen = 0;
  let count = 0;

  // Initialize the map with an initial running sum of 0 at index -1
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;

    if (map.has(count)) {
      maxLen = Math.max(maxLen, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return maxLen;
}

//Now if we check

const nums = [0, 1];
const result = maxLength(nums);
console.log(result); //Output: 2


