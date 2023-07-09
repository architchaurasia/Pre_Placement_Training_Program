// Q7.Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Solution
function integer(nums) {
    let left = 0;
    let right = 0;
  
    while (left < nums.length) {
      if (nums[left] !== 0) {
        nums[right] = nums[left];
        right++;
      }
      left++;
    }
  
    while (right < nums.length) {
      nums[right] = 0;
      right++;
    }
  }

  const nums = [0, 1, 0, 3, 12];
  integer(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]
  