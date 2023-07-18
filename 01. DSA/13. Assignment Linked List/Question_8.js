// Q.8 Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

// Example 1:
// Input:
// LinkedList = 1 <--> 3 <--> 4
// x = 3
// Output:1 3
// Explanation:After deleting the node at
// position 3 (position starts from 1),
// the linked list will be now as 1->3.

// Example 2:
// Input:
// LinkedList = 1 <--> 5 <--> 2 <--> 9
// x = 1
// Output:5 2 9

//Solution
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function deleteNodeAtPosition(head, position) {
    // If list is empty
    if (head === null) {
      return head;
    }
  
    // Case 1: Deleting the head node
    if (position === 1) {
      let nextNode = head.next;
      if (nextNode !== null) {
        nextNode.prev = null;
      }
      head = nextNode;
      return head;
    }
  
    let current = head;
    let count = 1;
  
    // Find the node at the given position
    while (current !== null && count < position) {
      current = current.next;
      count++;
    }
  
    // Case 2: Deleting a node in the middle
    if (current !== null && current.next !== null) {
      current.prev.next = current.next;
      current.next.prev = current.prev;
      return head;
    }
  
    // Case 3: Deleting the tail node
    if (current !== null && current.next === null) {
      current.prev.next = null;
      return head;
    }
  
    return head;
  }
  
  // Example:
  
  // Create a doubly linked list: 1 <-> 5 <-> 2 <-> 9
  let head = new Node(1);
  let node2 = new Node(5);
  let node3 = new Node(2);
  let node4 = new Node(9);
  
  head.next = node2;
  node2.prev = head;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  node4.prev = node3;
  
  // Delete a node at position 1
  head = deleteNodeAtPosition(head, 1);
  
  // Print the updated linked list: 5 <-> 2 <-> 9
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  