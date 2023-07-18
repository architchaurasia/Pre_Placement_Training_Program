// Q.6 Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

// Examples:
// Input: a: 5->10->15, b: 2->3->20

// Output: 2->3->5->10->15->20

// Input: a: 1->1, b: 2->4

// Output: 1->1->2->4

//Solution
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeSortedLists(a, b) {
  if (a === null) return b;
  if (b === null) return a;

  let head = null;
  let tail = null;

  // Set the head and tail pointers to the smaller first node
  if (a.data <= b.data) {
    head = a;
    tail = a;
    a = a.next;
  } else {
    head = b;
    tail = b;
    b = b.next;
  }

  // Merge the remaining nodes of both lists
  while (a !== null && b !== null) {
    if (a.data <= b.data) {
      tail.next = a;
      tail = a;
      a = a.next;
    } else {
      tail.next = b;
      tail = b;
      b = b.next;
    }
  }

  // Append the remaining nodes of list a or b
  if (a !== null) {
    tail.next = a;
  } else {
    tail.next = b;
  }

  return head;
}

// Example:

// Create linked list a: 5->10->15
let a = new Node(5);
a.next = new Node(10);
a.next.next = new Node(15);

// Create linked list b: 2->3->20
let b = new Node(2);
b.next = new Node(3);
b.next.next = new Node(20);

// Merge the two sorted lists
let mergedList = mergeSortedLists(a, b);

// Print the merged list: 2->3->5->10->15->20
let current = mergedList;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

/**
Output:
2
3
5
10
15
20
   */
