// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // turn the number into a string and reverse the string
  if (n >= 0) {
    return parseInt(n.toString().split("").reverse().join(""));
  } else {
    n *= -1;
    return parseInt(n.toString().split("").reverse().join("")) * -1;
  }
}

module.exports = reverseInt;
