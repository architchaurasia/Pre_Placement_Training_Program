// Q.4 Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"

//Solution
function reverseWords(s) {
  const words = s.split(" ");

  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return reversedWords.join(" ");
}

//Now we are checking the function

const s = "Let's take LeetCode contest";
const result = reverseWords(s);
console.log(result);//Output: "s'teL ekat edoCteeL tsetnoc"
