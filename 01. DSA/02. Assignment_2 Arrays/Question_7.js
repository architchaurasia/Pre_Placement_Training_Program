// Q.7 An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

//Solution
function monotonic(nums) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        decreasing = false;
      }
      if (nums[i] < nums[i - 1]) {
        increasing = false;
      }
    }
  
    return increasing || decreasing;
  }
  
  const nums = [1, 2, 2, 3];
  const result = monotonic(nums);
  console.log(result); // Output: true
  
//Note: we initialize two boolean variables, increasing and decreasing, to track the monotonicity of the array. We assume the array is initially monotone increasing and monotone decreasing. We iterate through the array using a loop and compare each element nums[i] with the next element nums[i + 1]. If nums[i] is greater than nums[i + 1], we set increasing to false, indicating that the array is not monotone increasing. If nums[i] is smaller than nums[i + 1], we set decreasing to false, indicating that the array is not monotone decreasing.After completing the iteration, we check if either increasing or decreasing is true. If either of them is true, it means the array is either monotone increasing or monotone decreasing, and we return true. Otherwise, we return false.