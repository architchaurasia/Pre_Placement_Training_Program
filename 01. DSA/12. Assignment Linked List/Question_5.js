// Q.5 Given a linked list of **N** nodes such that it may contain a loop.

// A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

// Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

// Example 1:
// Input:
// N = 3
// value[] = {1,3,4}
// X = 2
// Output:1
// Explanation:The link list looks like
// 1 -> 3 -> 4
//      ^    |
//      |____|
// A loop is present. If you remove it
// successfully, the answer will be 1.

// Example 2:
// Input:
// N = 4
// value[] = {1,8,3,4}
// X = 0
// Output:1
// Explanation:The Linked list does not
// contains any loop.

// Example 3;
// Input:
// N = 4
// value[] = {1,2,3,4}
// X = 1
// Output:1
// Explanation:The link list looks like
// 1 -> 2 -> 3 -> 4
// ^              |
// |______________|
// A loop is present.
// If you remove it successfully,
// the answer will be 1.

//Solution
function linkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head;
  let loopExists = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      loopExists = true;
      break;
    }
  }

  if (!loopExists) {
    return head;
  }

  slow = head;

  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = null;

  return head;
}

//We will test above function

// Example 1
let linkedList1 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
let tail1 = linkedList1.next.next;
tail1.next = linkedList1.next;
console.log(linkedList(linkedList1)); // Output: { val: 1, next: { val: 3, next: { val: 4, next: null } } }

// Example 2
let linkedList2 = {
  val: 1,
  next: { val: 8, next: { val: 3, next: { val: 4, next: null } } },
};
console.log(linkedList(linkedList2)); // Output: { val: 1, next: { val: 8, next: { val: 3, next: { val: 4, next: [Object] } } } }

// Example 3
let linkedList3 = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};
let tail3 = linkedList3.next.next.next;
tail3.next = linkedList3.next;
console.log(linkedList(linkedList3)); // Output: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: [Object] } } } }
