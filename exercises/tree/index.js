// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  //   Push a new node with the data
  add(data) {
    this.children.push(new Node(data));
  }

  //   Remove the desired child with the same data property
  //   Splice (start, deleteCount, itemToInsert)
  remove(data) {
    // Method 1: Using splice to cut out the data
    // for (let i = 0; i < this.children.length; i++) {
    //   if (this.children[i].data === data) {
    //     // At the ith index, delete 1 item
    //     this.children.splice(i, 1);
    //   }
    // }

    // Method 2: Using array.filter
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  // Breadth First (left to right)
  traverseBF(fn) {
    // let node = this.root; // redundant
    let queue = [this.root];
    // the loop will repeat with the next node until the nodes are all processed.
    // better way - 3 lines
    while (queue.length) {
      // unshift removes the first element and returns it
      const node = queue.shift();
      queue.push(...node.children);
      fn(node);
    }

    // my way - 5 lines of code
    // while (queue[0]){
    // fn(queue[0]);
    // for (let i = 0; i < queue[0].children.length; i++) {
    //   queue.push(queue[0].children[i]);
    // }
    // queue.splice(0, 1);
    // }
  }
  traverseDF(fn) {
    const queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      queue.unshift(...node.children);
      fn(node);
    }
  }
}

// Test: Create a Tree
//                      20
//      0 ,                40,        -15
//  12, -2, 1,                        -2
const tree = new Tree();
tree.root = new Node(20);
// tree.root.children = [new Node(0), new Node(40), new Node(-15)];
tree.root.add(0);
tree.root.add(40);
tree.root.add(-15);
tree.root.children[0].add(12);
tree.root.children[0].add(-2);
tree.root.children[0].add(1);
tree.root.children[2].add(-2);
// console.log(tree.root.children);

// Test: See if our Breadth Traversal Method works to add 10 to each spot. If it works, the root should be 30 and the bottom right node should be 8
tree.traverseBF((node) => {
  node.data += 10;
});
// Tests Passed
console.log(tree); // should show 30
console.log(tree.root.children[2].children[0].data); // should show 8

module.exports = { Tree, Node };
