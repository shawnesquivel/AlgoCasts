// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //   insert a node to the beginning of the linkedlist
  insertFirst(data) {
    // Pass this.head as the NEXT property if it already exists.
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }
  //   returns the number of nodes in  the linkedlist
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
      //   exits once node.next = null
    }
    return counter;
  }
  //   returns the first node
  getFirst() {
    return this.head;
  }
  //   returns the last node
  getLast() {
    // First Pass
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node.next) {
    //   node = node.next;
    // }
    // return node;
    // Refactored Solution
    return this.getAt(this.size() - 1);
  }
  //   remove all the nodes
  clear() {
    this.head = null;
  }
  //   remove the head, replace the head with the second node
  removeFirst() {
    if (!this.head) {
      return;
    }
    // this is redundant, this.head will become null through the last line anyways!
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    this.head = this.head.next;
  }
  // remove the last node
  removeLast() {
    // if the list is empty
    if (!this.head) {
      return;
    }
    let previous = this.head;
    // if the list doesn't have a second node
    if (!previous.next) {
      this.head = null;
      return;
    }
    // if the list has more than 1 node
    let node = previous.next;
    while (node.next) {
      previous = previous.next;
      node = node.next;
    }
    previous.next = null;
  }
  //   insert a node into the very end.
  insertLast(data) {
    const node = this.getLast();
    if (node) {
      node.next = new Node(data);
    } else {
      // node is empty, thus node will be null
      this.insertFirst(data);
    }
  }
  //   return the node at a specified index
  getAt(n) {
    let node = this.head;
    // If there is no head
    if (!node) {
      return null;
    }
    // If they want the head -- REDUNDANT
    // if (n === 0) {
    //   return node;
    // }
    // If they want an index that is outside the size
    if (this.size() < n) {
      console.log("The index does not exist");
      return null;
    }
    // If they want an index between the first and the last
    let counter = 0;
    while (counter < n) {
      node = node.next;
      counter++;
    }
    return node;
  }
  //   remove at node at the index
  removeAt(n) {
    // if N is not a number
    if (typeof n !== "number") {
      console.log("Please provide a number for the index to remove");
      return;
    }

    // If the list is empty
    if (this.head == null) {
      console.log("the list is empty!");
      return;
    }
    // if n = 0, remove the head and shift everything up
    if (n === 0) {
      this.removeFirst();
      return;
    }
    // if n is bigger than the size
    if (n > this.size() - 1) {
      console.log("the index is outside the range");
      return;
    }
    // if we want to remove the last node
    if (n === this.size() - 1) {
      return this.removeLast();
    }

    // until our counter reaches the index -- this is the same code as getAt()
    // let counter = 1; // current index
    // let previous = this.head;
    // let node = this.head.next;

    // while (counter < n) {
    //   previous = node;
    //   node = node.next;
    //   counter++;
    // }

    // Better alternative to above code
    let previous = this.getAt(n - 1);
    // once we've reached the index, set the previous node's next property to null
    previous.next = this.getAt(n + 1);

    return;
  }

  insertAt(data, n) {
    // Edge Cases
    if (n < 0) {
      console.log("The index is negative");
      return;
    }
    if (typeof n !== "number") {
      console.log("The index to insert must be a number");
      return;
    }
    if (data === null) {
      console.log("No data to insert");
      return;
    }

    // Solution
    // Head
    if (!this.head || n === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // Add to the tail if greater than or equal to the size
    if (n >= this.size() - 1) {
      this.insertLast(data);
      return;
    }
    // Get the node before the index and at the index.
    let previous = this.getAt(n - 1);
    // let after = this.getAt(n);

    // Link the left side of the node
    previous.next = new Node(data, this.getAt(n));
  }
  // applies a function to each of the node's data.
  forEach(fn) {
    let node = this.head;
    let counter = 0; // so we can pass the index
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  // don't really know how this works but it's noted.
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node; // adds the node
      node = node.next;
    }
  }
}

let l = new LinkedList();
l.insertFirst(3);
l.insertFirst(2);
l.insertFirst(1);
console.log(l);
// Tests for removeAt()
// Test #1 - that we can remove the first one
// l.removeAt(0);
// console.log(l);
// if (l.head.data !== 2) {
//   console.log("error");
// }
// Test #2 -  an index outside of size - should crash if we try to remove n=3, as max n = 2
// l.removeAt(3);
// Test #3 - any index
// l.removeAt(1); //should remove node[1] = 2, second node.data sholud equal 3 now
// console.log(l);
// if (l.head.next.data !== 3) {
//   console.log("third test failed");
// }

// Tests for insertAt ()
// Test 1: If the n is outside of bounds, we should get 1,2,3,0
l.insertAt(0, 10);
if (l.getLast().data !== 0) {
  console.log(
    "insertAt() Test 1 Failed: Expected 0, Received",
    l.getLast().data
  );
} else if (l.getLast().data === 0) {
  console.log("Test 1 Passed: Added zero to the end of the list");
}
// Test 2: Add a 9 at the second node (n=1) of the list 1,2,3,0 to make 1,9,2,3,0
l.insertAt(9, 1);
if (l.getAt(1).data !== 9) {
  console.log(
    "insertAt() Test 2 Failed: Expected 9, Received: ",
    l.getAt(1).data
  );
} else if (l.getAt(1).data === 9) {
  console.log("insertAt() Test 2 Passed: Added 9 to n=1");
}
console.log(l.head.next);

// Tests for forEach()
// Test 1:

module.exports = { Node, LinkedList };
