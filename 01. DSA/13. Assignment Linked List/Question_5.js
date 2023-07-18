// Q.5 Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

// Examples:
// Input:   1->2->3->5->2->10, key = 2
// Output:  1->2->3->5->10

//Solution
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteLastOccurrence(head, key) {
  let prev = null;
  let current = head;
  let lastOccurrence = null;
  let lastOccurrencePrev = null;

  while (current !== null) {
    if (current.data === key) {
      lastOccurrence = current;
      lastOccurrencePrev = prev;
    }
    prev = current;
    current = current.next;
  }

  if (lastOccurrence !== null) {
    if (lastOccurrencePrev === null) {
      head = lastOccurrence.next;
    } else {
      lastOccurrencePrev.next = lastOccurrence.next;
    }
    lastOccurrence.next = null;
  }

  return head;
}

// Example:

// Create linked list: 1->2->3->5->2->10
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

let key = 2;

// Delete the last occurrence of key from the linked list
head = deleteLastOccurrence(head, key);

// Print the updated linked list: 1->2->3->5->10
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

/**
Output:
1
2
3
5
10
 */
