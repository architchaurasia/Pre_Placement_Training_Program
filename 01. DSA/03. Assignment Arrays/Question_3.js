// Q.3 A permutation of an array of integers is an arrangement of its members into a
// sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr:
// [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

// The next permutation of an array of integers is the next lexicographically greater
// permutation of its integer. More formally, if all the permutations of the array are
// sorted in one container according to their lexicographical order, then the next
// permutation of that array is the permutation that follows it in the sorted container.

// If such an arrangement is not possible, the array must be rearranged as the
// lowest possible order (i.e., sorted in ascending order).

// ● For example, the next permutation of arr = [1,2,3] is [1,3,2].
// ● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// ● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
// have a lexicographical larger rearrangement.

// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

//Solution
function permutationArr(nums) {
    const n = nums.length;
    
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = n - 1;
      while (j > i && nums[j] <= nums[i]) {
        j--;
      }
      swap(nums, i, j);
    }
  
    reverse(nums, i + 1, n - 1);
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start, end) {
    while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  }
  
  const nums = [1, 2, 3];
  permutationArr(nums);
  console.log(nums); // Output: [1, 3, 2]

//Note: Here swap and reverse function are used to perform the swapping and reversing of elements.
  