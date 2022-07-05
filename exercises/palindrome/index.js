// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Original Solution - also the best
function palindrome1(str) {
  // First reverse the string
  const newStr = str.split("").reverse().join("");
  //   if (str === newStr) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return str.every(() => str.split("").reverse().join(""));
}

// Using the "EVERY" function - more complex, but an alternative method
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;
