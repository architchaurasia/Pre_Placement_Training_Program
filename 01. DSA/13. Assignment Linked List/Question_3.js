// Q.3 Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

// Example 1:
// Input:
// LinkedList: 1->2->2->4->5->6->7->8
// K = 4
// Output:4 2 2 1 8 7 6 5
// Explanation:
// The first 4 elements 1,2,2,4 are reversed first
// and then the next 4 elements 5,6,7,8. Hence, the
// resultant linked list is 4->2->2->1->8->7->6->5.

// Example 2:
// Input:
// LinkedList: 1->2->3->4->5
// K = 3
// Output:3 2 1 5 4
// Explanation:
// The first 3 elements are 1,2,3 are reversed
// first and then elements 4,5 are reversed.Hence,
// the resultant linked list is 3->2->1->5->4.

//Solution
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseKNodes(head, k) {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;
  
    while (current !== null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
  
    if (next !== null) {
      head.next = reverseKNodes(next, k);
    }
  
    return prev;
  }
  
  // Example:
  
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(2);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  
  let newHead = reverseKNodes(head, 4);
  
  while (newHead !== null) {
    console.log(newHead.data);
    newHead = newHead.next;
  } //Output: 5
  