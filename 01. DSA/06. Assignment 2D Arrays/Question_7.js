// Q.7 Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:
// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

//Solution
function matrixInt(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++; // Move to the next row

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--; // Move to the previous column

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--; // Move to the previous row

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++; // Move to the next column
  }

  return matrix;
}

//We will check the above function

const n = 3;
const matrix = matrixInt(n);
console.log(matrix); // Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
