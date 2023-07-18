// Q.4 Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

// There is only **one repeated number** in `nums`, return *this repeated number*.

// You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

//Solution
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // Move pointers to find the meeting point
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Reset slow pointer to the first element
  slow = nums[0];

  // Move pointers until they meet again
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

//Now we test above function

console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
