//Q.3 Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// Example 1:

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// Explanation: After squaring, the array becomes [16,1,0,9,100].

// After sorting, it becomes [0,1,9,16,100].

//Solution
function square(nums) {
  const squaredNums = nums.map((num) => Math.pow(num, 2));
  squaredNums.sort((a, b) => a - b);
  return squaredNums;
}

//now we write value for the function

const nums = [-4, -1, 0, 3, 10];
const result = square(nums);
console.log(result); //Output: [0, 1, 9, 16, 100]
