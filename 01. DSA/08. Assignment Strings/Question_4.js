// Q.4 You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.

// **Input:** s = "4(2(3)(1))(6(5))"

// **Output:** [4,2,6,3,1,5]

//Solution
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTreeFromString(s) {
    function parseNextInt() {
      let num = "";
      while (idx < s.length && !isNaN(parseInt(s[idx]))) {
        num += s[idx];
        idx++;
      }
      return parseInt(num);
    }
  
    // Helper function to construct the tree recursively
    function constructTree() {
      if (idx >= s.length || s[idx] === ")") {
        return null;
      }
  
      // Parse the value of the current node
      const val = parseNextInt();
      const node = new TreeNode(val);
  
      // Construct the left subtree
      if (idx < s.length && s[idx] === "(") {
        idx++; 
        node.left = constructTree();
      }
  
      // Construct the right subtree
      if (idx < s.length && s[idx] === "(") {
        idx++; 
        node.right = constructTree();
      }
  
 
      idx++;
  
      return node;
    }
  
    let idx = 0; 
  
    return constructTree();
  }
  
  function preorderTraversal(root) {
    const result = [];
    function traverse(node) {
      if (!node) {
        return;
      }
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(root);
    return result;
  }
  
//   Here we are checking above function

const s = "4(2(3)(1))(6(5))";
const root = constructBinaryTreeFromString(s);
const result = preorderTraversal(root);
console.log(result);
