// Q.6 An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

//Solution
function intArray(changed) {
  const n = changed.length;
  if (n % 2 !== 0) {
    // If the length of `changed` is not even, it cannot be a doubled array
    return [];
  }

  const freqMap = new Map();
  for (const num of changed) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const result = [];
  freqMap.forEach((count, num) => {
    if (count === 0) return;
    if (num === 0) {
      if (count % 2 !== 0) {
        return [];
      }
      for (let i = 0; i < count / 2; i++) {
        result.push(0);
      }
    } else {
      const half = num / 2;
      if (!freqMap.has(half) || freqMap.get(half) < count) {
        // If the half value is not present or its frequency is less, return an empty array
        return [];
      }
      for (let i = 0; i < count; i++) {
        result.push(half);
        freqMap.set(half, freqMap.get(half) - 1);
      }
    }
  });

  return result;
}

//Now we are checking

const changed = [1, 3, 4, 2, 6, 8];
const result = intArray(changed);
console.log(result); //Output: [ 2, 3, 4 ]

