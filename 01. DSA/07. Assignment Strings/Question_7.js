// Q.7 Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac".

//Solution
function backspace(s, t) {
  function buildString(str) {
    const stack = [];

    for (let char of str) {
      if (char !== "#") {
        stack.push(char);
      } else {
        stack.pop();
      }
    }

    return stack.join("");
  }

  const processedS = buildString(s);
  const processedT = buildString(t);

  return processedS === processedT;
}

//Now we are checking the function

const s = "ab#c";
const t = "ad#c";
const result = backspace(s, t);
console.log(result); //Output: true
