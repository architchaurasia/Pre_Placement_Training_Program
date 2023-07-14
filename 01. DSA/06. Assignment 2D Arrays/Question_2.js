// Q.2 You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

// Output: true

//Solution
function intMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0; // Left pointer
  let right = m * n - 1; // Right pointer

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = matrix[Math.floor(mid / n)][mid % n];

    if (num === target) {
      return true;
    } else if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

//   Now if we check our function`

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
const result = intMatrix(matrix, target);
console.log(result); // Output: true