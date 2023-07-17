// Q.7 Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// Examples:
//  Input: str = “cd”

//  **Output:** cd dc

//  **Input:** str = “abb”

//  **Output:** abb abb bab bba bab bba

//Solution
function permutations(str, current = "") {
  if (str.length === 0) {
    console.log(current);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    permutations(remaining, current + char);
  }
}

//We check above function

console.log('Permutations of "cd":');
permutations("cd");

console.log('Permutations of "abb":');
permutations("abb");

/**
 * Permutations of "cd":
cd
dc
Permutations of "abb":
abb
abb
bab
bba
bab
bba
 */

//Note: Above function generates all possible permutations of the input string by recursively permuting the remaining characters and adding them to the current permutation.