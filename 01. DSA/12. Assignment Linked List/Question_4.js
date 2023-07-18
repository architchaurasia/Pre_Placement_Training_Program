// Q.4 Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

// Examples:

// Input: R->A->D->A->R->NULL

// Output: Yes

// Input: C->O->D->E->NULL

// Output: No

//Solution
function singlyLinked(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = reverseLinkedList(slow);

  let first = head;
  let second = secondHalf;
  while (second !== null) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }

  return true;
}

function singlyLinked(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

//We check above function

// Example 1
let linkedList1 = { val: 'R', next: { val: 'A', next: { val: 'D', next: { val: 'A', next: { val: 'R', next: [Object] } } } } };
console.log(singlyLinked(linkedList1)); // Output: true

// Example 2
let linkedList2 = { val: 'C', next: { val: 'O', next: { val: 'D', next: { val: 'E', next: [Object] } } } };
console.log(singlyLinked(linkedList2)); // Output: false
