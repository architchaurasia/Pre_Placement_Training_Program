// Q.8 Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

//Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3

// Output: [2,3,5,4,1,7]

// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

//Solution
function arrayNum(nums, n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[i + n]);
    }
  
    return result;
  }
  
  // Test the function
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const result = arrayNum(nums, n);
  console.log(result); // Output: [2, 3, 5, 4, 1, 7]
  
//Note Here we rearranges the elements in the nums array according to a specific pattern. It initializes an empty array result to store the rearranged elements. It then iterates through the first half of the nums array and adds the corresponding elements from the second half to the result array. The resulting array result contains the elements rearranged according to the specified pattern