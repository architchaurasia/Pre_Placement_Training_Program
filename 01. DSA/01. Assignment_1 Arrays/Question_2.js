//Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// - Return k.

// Example :
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_*,_*]

// Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)

//Solution
function element(nums, val) {
    let k = 0; // Number of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i]; // Move the element to the k-th position
        k++; // Increment k for each non-val element
      }
    }
  
    return k;
  }

  const nums = [3, 2, 2, 3];
  const val = 3;
  const k = element(nums, val);
  console.log(k); // Output: 2
  console.log(nums); // Output: [2, 2, 2, 3]

// Note: Here the array using a single loop. We maintain a variable k to keep track of the number of elements not equal to val. For each element, if it is not equal to val, we move it to the k-th position in the array and increment k. This effectively removes all occurrences of val and retains only the non-val elements at the beginning of the array.