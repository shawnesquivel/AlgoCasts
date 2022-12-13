// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// Better: Slow and Fast Node
function midpoint(list) {
  let slow = list.head;
  let fast = list.head;
  // only one or two nodes
  if (!slow.next || !slow.next.next) {
    return slow;
  }

  //   If both of the nodes
  // fast.next is for odd number of nodes
  // fast.next.next is for even number of nodes
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// My Solution - Pop from the outside in
// function midpoint(list) {
//   // edge cases
//   // if there's only one node or we have an empty list, return null
//   let first = list.getFirst();
//   let last = list.getLast();
//   if (!first || !first.next) {
//     return first;
//   }
//   while (first && last) {
//     // middlepoint for an odd list
//     if (first === last) {
//       return first;
//     }
//     // middlepoint for even list
//     if (first.next === last) {
//       return first;
//     }
//     // there are still nodes in between, so remove the first and last nodes
//     list.removeFirst();
//     list.removeLast();
//     // creaate the new first and last nodes
//     first = list.getFirst();
//     last = list.getLast();
//   }
// }
module.exports = midpoint;
