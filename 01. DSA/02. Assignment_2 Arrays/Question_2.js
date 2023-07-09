// Q2. Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:
// Input: candyType = [1,1,2,2,3,3]
// Output: 3

// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

//Solution

function candies(candyType) {
  const uniqueCandies = new Set(candyType);
  const maxCandies = candyType.length / 2;

  return Math.min(uniqueCandies.size, maxCandies);
}

const candyType = [1, 1, 2, 2, 3, 3];
const result = candies(candyType);
console.log(result); // Output: 3

//Note:  we create a set called uniqueCandies by passing the candyType array to the Set constructor. This automatically eliminates duplicates and keeps track of the unique candy types. Then, we calculate maxCandies as candyType.length / 2, which represents the maximum allowed count of candies. Finally, we return the minimum of the size of the uniqueCandies set and maxCandies. This ensures that we return the maximum number of different types of candies Alice can eat while following the doctor's advice.