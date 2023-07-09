//Q4. You are given a large integer represented as an integer array num, where each num[i] is the ith digit of the integer. The num are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of num.

// Example 1:
// Input: num = [1,2,3]
// Output: [1,2,4]

// Explanation:** The array represents the integer 123.

// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

//Solution
function element(num) {
    const n = num.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (num[i] === 9) {
        num[i] = 0;
      } else {
        num[i]++;
        return num;
      }
    }
  
    // If all num were 9, add an additional digit
    num.unshift(1);
    return num;
  }
  
  const num = [1, 2, 3];
  const result = element(num);
  console.log(result); // Output: [1, 2, 4]
  
// Note: we start from the least significant digit and iterate through the array in reverse order. If the digit is 9, we set it to 0. Otherwise, we increment the digit by one and return the updated array.