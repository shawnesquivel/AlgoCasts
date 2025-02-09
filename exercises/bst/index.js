// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    // NOTE: can also do this with a bunch of if else
    // bigger than node's data: go right
    if (data > this.data) {
      // if unfilled
      if (!this.right) {
        this.right = new Node(data);
        // if filled
      } else {
        this.right.insert(data);
      }
    }
    // less than node's data: go left
    if (data < this.data) {
      // if unfilled
      if (!this.left) {
        this.left = new Node(data);
        // if filled
      } else {
        this.left.insert(data);
      }
    }
  }
  //   return the value with the data
  contains(data) {
    if (data === this.data) {
      return this;
    }

    if (data > this.data && this.right) {
      return this.right.contains(data);
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
