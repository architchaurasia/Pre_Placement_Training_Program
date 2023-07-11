// Q.1
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// Example 1:

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.

//Solution
//Here we initialize p1, p2, and p3, to track the current indices in arr1, arr2, and arr3

function arraysInt(arr1, arr2, arr3) {
// empty array result to store integers.
  const result = [];
  let p1 = 0, p2 = 0, p3 = 0;

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
      p3++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr2[p2] < arr3[p3]) {
      p2++;
    } else {
      p3++;
    }
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
const result = arraysInt(arr1, arr2, arr3);
console.log(result); // Output: [1, 5]
