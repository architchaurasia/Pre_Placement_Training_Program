// Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//Example 1:
// Input: nums = [1,2,3,1]

// Output: true

//Solution
function duplicate(nums) {
    const emp = new Set();
  
    for (let i = 0; i < nums.length; i++) {
      if (emp.has(nums[i])) {
        return true;
      } else {
        seen.add(nums[i]);
      }emp
    }
  
    return false;
  }
  
  // Test the function
  const nums = [1, 2, 3, 1];
  const ans = duplicate(nums);
  console.log(ans); // Output: true
  
//Note: Here we initialize an empty set called emp to store the unique elements we encounter. We iterate through the array nums and for each element, we check if it is already present in the set using the has() method. If it is, we return true. Otherwise, we add the element to the set using the add() method. If we reach the end of the loop without finding any duplicates, we return false.