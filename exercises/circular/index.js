// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const L = require("./linkedlist");
const LinkedList = L.LinkedList;
const Node = L.Node;

// Concise Solution
function circular(list) {
  let slow = list.head;
  let fast = list.head;

  //   while there are 1 or 2 more items ahead of fast
  while (fast.next && fast.next.next) {
    // Slow +1 , Fast +2
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  //   If there is no 2nd node
  return false;
}

// My Way - Handshake Method
// function circular(list) {
//   // Edge Cases
//   // No nodes or just the head - cannot be circular
//   if (!list.head || !list.head.next) {
//     return false;
//   }

//   // Start at the second node, n = 1
//   let n = 1;
//   let node = list.getAt(n); // n=1

//   let offset = 1;

//   while (node) {
//     let compareNode = list.getAt(n - offset); // n=0 to start
//     // Check the previous node exists AND make sure we are not at the head.
//     while (compareNode && compareNode !== list.head) {
//       // circular list condition
//       if (compareNode.next === node) {
//         return true;
//         // if the previous node is the head, look forward now
//       } // go back another previous node (n-2)
//       else {
//         offset++;
//         compareNode = list.getAt(n - offset);
//       }
//     }
//     offset = 1; // reset the offset
//     compareNode = list.getAt(n + offset);
//     // Check the forward nodes, compareNode = n+1 and make sure weren't not at the tail.
//     while (compareNode) {
//       if (compareNode.next === node) {
//         return true;
//         // Compare the node at n+2
//       } else {
//         offset++;
//         compareNode = list.getAt(n + offset);
//       }
//     }

//     // after comparing the node to all the other nodes, let the node be the next node.
//     node = node.next;
//     n++;
//   }

//   // If all the tests pass, we can say it isn't circular.
//   return false;
// }

// Test for a circular list
// const list = new LinkedList();
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// list.head = a;
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = c;

// console.log(list);

// if (circular(list)) {
//   console.log("circular list");
// } else {
//   console.log("not a circular list");
// }

module.exports = circular;
