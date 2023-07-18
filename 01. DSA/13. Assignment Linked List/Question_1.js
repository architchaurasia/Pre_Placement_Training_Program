// Q.1 Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

// Examples:
// Input: list1 = 5->2->3->8
// list2 = 1->7->4->5
// Output: New list = 5->7->4->8

// Input:list1 = 2->8->9->3
// list2 = 5->3->6->4
// Output: New list = 5->8->9->4

//Solution
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createNewList(list1, list2) {
  let newList = null;
  let newListTail = null;

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    let newNode;

    if (current1.data >= current2.data) {
      newNode = new Node(current1.data);
      current1 = current1.next;
    } else {
      newNode = new Node(current2.data);
      current2 = current2.next;
    }

    if (newList === null) {
      newList = newNode;
      newListTail = newNode;
    } else {
      newListTail.next = newNode;
      newListTail = newNode;
    }
  }

  if (current1 !== null) {
    if (newList === null) {
      newList = current1;
    } else {
      newListTail.next = current1;
    }
  }

  if (current2 !== null) {
    if (newList === null) {
      newList = current2;
    } else {
      newListTail.next = current2;
    }
  }

  return newList;
}

// Example:

let list1 = new Node(5);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(8);

let list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(4);
list2.next.next.next = new Node(5);

let newList = createNewList(list1, list2);

// Print the new linked list: 5->7->4->8
while (newList !== null) {
  console.log(newList.data);
  newList = newList.next;
}

/**
Output:
5
2
3
8
1
7
4
5
*/
