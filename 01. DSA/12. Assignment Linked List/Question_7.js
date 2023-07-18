// Q.7 Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
// For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

// Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

//Solution
function insertAlternate(first, second) {
  if (!first) {
    return second; // If first list is empty, return second list
  }
  if (!second) {
    return first;
  }

  let currentFirst = first;
  let currentSecond = second;

  while (currentFirst && currentSecond) {
    let firstNext = currentFirst.next;
    let secondNext = currentSecond.next;

    currentSecond.next = firstNext;
    currentFirst.next = currentSecond;

    currentFirst = firstNext;
    currentSecond = secondNext;
  }

  if (currentSecond) {
    let lastNode = first;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = currentSecond;
  }

  return first;
}

//We will test the functions

let firstList = {
    val: 5,
    next: {
      val: 7,
      next: {
        val: 17,
        next: {
          val: 13,
          next: {
            val: 11,
            next: null,
          },
        },
      },
    },
  }; 
  
  let secondList = {
    val: 12,
    next: {
      val: 10,
      next: {
        val: 2,
        next: {
          val: 4,
          next: {
            val: 6,
            next: null,
          },
        },
      },
    },
  };
  
  console.log(insertAlternate(firstList, secondList)); //Output: { val: 5, next: { val: 12, next: { val: 7, next: [Object] } } }
  console.log(firstList); //{ val: 5, next: { val: 12, next: { val: 7, next: [Object] } } }
  console.log(secondList); //{ val: 12, next: { val: 7, next: { val: 10, next: [Object] } } }
  