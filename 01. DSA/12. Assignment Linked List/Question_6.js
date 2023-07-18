// Q.6 Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

// Difficulty Level: Rookie

// Examples:
// Input:
// M = 2, N = 2
// Linked List: 1->2->3->4->5->6->7->8
// Output:
// Linked List: 1->2->5->6

// Input:
// M = 3, N = 2
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->2->3->6->7->8

// Input:
// M = 1, N = 1
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->3->5->7->9

//Solution
function deleteNodes(head, M, N) {
  if (!head) {
    return null; // Empty linked list
  }

  let current = head;

  while (current !== null) {
    for (let i = 1; i < M && current !== null; i++) {
      current = current.next;
    }

    if (current === null) {
      break;
    }

    let temp = current.next;

    for (let i = 0; i < N && temp !== null; i++) {
      temp = temp.next;
    }

    if (temp === null) {
      current.next = null;
    } else {
      current.next = temp.next; // Connect the retained nodes after the deleted N nodes
    }

    current = current.next; // Move to the next iteration
  }

  return head;
}

//We test above function

// Example 1
let linkedList1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};
console.log(deleteNodes(linkedList1, 2, 2)); // Output: { val: 1, next: { val: 2, next: { val: 6, next: { next: [object]  } } }

// Example 2
let linkedList2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: {
                    val: 10,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
console.log(deleteNodes(linkedList2, 3, 2)); // Output: { val: 1, next: { val: 2, next: { val: 3, next: { [Object] } } }

// Example 3
let linkedList3 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: {
                    val: 10,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
console.log(deleteNodes(linkedList3, 1, 1)); // Output: { val: 1, next: { val: 3, next: { val: 7, next: [Object] } } }
