// Q.5 Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

//Solution
function maxProduct(nums) {
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];
  
    return Math.max(product1, product2);
  }
  
  // Test the function
  const nums = [1, 2, 3];
  const result = maxProduct(nums);
  console.log(result); // Output: 6
  
