// Q.2 Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

//Solution
function validString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "*") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  while (stack.length > 0) {
    const top = stack.pop();

    if (top !== "(" && top !== "*") {
      return false;
    }
  }

  return true;
}

//Here we check above function

const s = "()";
const result = validString(s);
console.log(result); //Output: "true"
