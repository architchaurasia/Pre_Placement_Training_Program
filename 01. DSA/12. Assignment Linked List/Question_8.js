// Q.8 Given a singly linked list, find if the linked list is circular or not.

// A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.

//Solution
function singlyList(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

//We test above function

// Create a circular linked list
let head = {
    val: 1,
    next: null,
  };
  
  let node2 = {
    val: 2,
    next: null,
  };
  
  let node3 = {
    val: 3,
    next: null,
  };
  
  let node4 = {
    val: 4,
    next: null,
  };
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = head; 
  
  console.log(singlyList(head)); // Output: true
  