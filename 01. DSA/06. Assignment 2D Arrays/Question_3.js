// Q.3 Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


// **Example 1:**

// **Input:** arr = [2,1]

// **Output:**

// false

//Solution
function intArray(arr) {
    const n = arr.length;
    let i = 0;
  
    if (n < 3 || arr[0] >= arr[1]) {
      return false;
    }
  
    // Ascending sequence
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }

    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Descending sequence
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  
// Now we check the function

const arr = [2, 1];
const result = intArray(arr);
console.log(result); //Output: false
