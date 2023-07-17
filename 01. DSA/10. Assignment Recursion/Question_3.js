// Q.3 Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

//Solution
function stringRecursive(set, subset = "", index = 0) {
  if (index === set.length) {
    console.log(subset);
    return;
  }

  // Recursive case 1: include the current character in the subset
  stringRecursive(set, subset + set[index], index + 1);

  // Recursive case 2: exclude the current character from the subset
  stringRecursive(set, subset, index + 1);
}

stringRecursive("abc");
// abc
// ab
// ac
// a
// bc
// b
// c


stringRecursive('abcd');
// abcd
// abc
// abd
// ab
// acd
// ac
// ad
// a
// bcd
// bc
// bd
// b
// cd
// c
// d
