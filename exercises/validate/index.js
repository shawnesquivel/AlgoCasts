// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // check max / min
  if (min !== null && node.data < min) {
    return false;
  }
  if (max !== null && node.data > max) {
    return false;
  }
  // check left is increasing - set new max
  if (node.left) {
    return validate(node.left, min, node.data);
  }
  // node on right should get larger - new min
  if (node.right) {
    return validate(node.right, node.data, max);
  }

  return true;
}

module.exports = validate;

// function validate(node, min = null, max = null) {
//   // check max and min
//   if (max !== null && node.data > max) {
//     return false;
//   }
//   //   check min
//   if (min !== null && node.data < min) {
//     return false;
//   }

//   //   pass left node
//   if (node.left) {
//     return validate(node.left, min, node.data);
//   }
//   //   pass right node
//   if (node.right) {
//     return validate(node.right, node.data, max);
//   }

//   return true;
// }
