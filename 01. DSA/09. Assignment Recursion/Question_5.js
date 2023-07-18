// Q.5 Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

// **Example 1:**

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: 8

// **Example 2:**

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: 45

//Solution
function arrInt(arr, index, max) {
  if (index === arr.length) {
    return max;
  }

  if (arr[index] > max) {
    max = arr[index];
  }

  return arrInt(arr, index + 1, max);
}

function getMaxElement(arr) {
  return arrInt(arr, 0, arr[0]);
}


console.log(getMaxElement([1, 4, 3, -5, -4, 8, 6])); // Output: 8
console.log(getMaxElement([1, 4, 45, 6, 10, -8])); // Output: 45

