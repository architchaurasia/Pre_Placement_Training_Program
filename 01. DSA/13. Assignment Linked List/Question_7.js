// Q.7 Given a Doubly Linked List, the task is to reverse the given Doubly Linked List.

// Example:
// Original Linked list 10 8 4 2
// Reversed Linked list 2 4 8 10

//Solution
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function reverseDoublyLinkedList(head) {
    let current = head;
    let temp = null;
  
    // Swap prev and next pointers for all nodes
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
  
    // Update the new head
    if (temp !== null) {
      head = temp.prev;
    }
  
    return head;
  }
  
  // Example:
  
  // Create a doubly linked list: 10 <-> 8 <-> 4 <-> 2
  let head = new Node(10);
  let node2 = new Node(8);
  let node3 = new Node(4);
  let node4 = new Node(2);
  
  head.next = node2;
  node2.prev = head;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  node4.prev = node3;
  
  // Reverse the doubly linked list
  head = reverseDoublyLinkedList(head);
  
  // Print the reversed linked list: 2 <-> 4 <-> 8 <-> 10
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  