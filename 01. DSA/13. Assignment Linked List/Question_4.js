// Q.4 Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

// Example:
// Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
// Output:   3->2->1->4->5->6->9->8->7->NULL.

//Solution
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseAlternateKNodes(head, k) {
  let current = head;
  let prev = null;
  let next = null;
  let count = 0;

  while (current !== null && count < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  count = 0;
  while (current !== null && count < k) {
    prev = current;
    current = current.next;
    count++;
  }

  if (current !== null) {
    prev.next = reverseAlternateKNodes(current, k);
  }

  return prev;
}

// Example:

// Create linked list: 1->2->3->4->5->6->7->8->9
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

// Reverse every alternate 3 nodes in the linked list
let newHead = reverseAlternateKNodes(head, 3);

while (newHead !== null) {
  console.log(newHead.data);
  newHead = newHead.next;
}

/**
6
9
8
7
   */
