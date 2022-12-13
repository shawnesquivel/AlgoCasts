// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;
  // Phase 1: Advance fast by n nodes
  //   Moves us n away from the start to remove the offset
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // Phase 2: We traverse the list forward since we cannot access a "back" property
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
