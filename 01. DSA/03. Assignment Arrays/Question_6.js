// Q.6 Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

//Solution
function arr(nums) {
    let result = 0;
  
    for (let num of nums) {
      result ^= num;
    }
  
    return result;
  }
  

  const nums = [2, 2, 1];
  const result = arr(nums);
  console.log(result); // Output: 1
  