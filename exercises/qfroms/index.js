// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// FILO
const Stack = require("./stack");

class Queue {
  // FIFO
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(n) {
    this.first.push(n);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const popped = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return popped;
  }
  //   peek at the FIRST value, not the last
  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const peek = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return peek;
  }
}

module.exports = Queue;
