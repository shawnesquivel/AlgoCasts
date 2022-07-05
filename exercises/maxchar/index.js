// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var count = {};
  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  //   Return the object property with the highest count

  //   For each property, compare the value to the previous max char
  // If it's bigger than the previous max number, make it the new char
  var maxChar = 0;
  for (const char in count) {
    if (count[char] > maxChar) {
      maxChar = char;
    }
  }
  return maxChar;
}

maxChar("aabcd");

module.exports = maxChar;
