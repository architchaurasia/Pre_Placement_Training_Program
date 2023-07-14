// Q.5 The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

// - For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

// Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

// **Example 1:**

// **Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

// **Output:** 40

// **Explanation:**

// We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

//Solution
function product(nums1, nums2) {
  nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
  nums2.sort((a, b) => b - a); // Sort nums2 in descending order

  let minSum = 0;
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    minSum += nums1[i] * nums2[i];
  }

  return minSum;
}

//Now we are checking here

const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
const result = product(nums1, nums2);
console.log(result); //Output: 40