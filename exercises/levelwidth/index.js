// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let width = [0]; // counts the width at each level
  let queue = [root, "s"]; // 's' represents the stopper
  let i = 0; // keeps track of the level
  // if queue ever has nothing in it, this wil not run.
  while (queue.length > 1) {
    let node = queue.shift(); // remove and return
    if (node == "s") {
      width.push(0); //initialize next level with zero
      i++; // point to the next level in the width array
      queue.push("s");
      // its a node
    } else {
      width[i]++;
      if (node.children) {
        queue.push(...node.children);
      }
    }
  }
  return width;
}

module.exports = levelWidth;
