//Q.2 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.

//Example 1:
//Input: n = 5

//Output: 2

//Explanation: Because the 3rd row is incomplete, we return 2.

//Solution
function countRow(n) {
  let rows = 0;
  let totalCoins = 0;

  while (totalCoins <= n) {
    rows++;
    totalCoins = (rows * (rows + 1)) / 2;
  }

  return rows - 1;
}

//Here, if we call the "countRow" function

const n = 5;
const result = countRow(n);
console.log(result); //Output: 2
