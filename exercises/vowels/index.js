// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// regular expression solution - most succint
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// Solution
// function vowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let counter = 0;
//     for (let char of str.toLowerCase()) {
//       if (vowels.includes(char)) {
//         counter++;
//       }
//     }
//     return counter;
//   }

// Shawn way
// function vowels(str) {
//     str = str.toLowerCase();
//     let vowels = ["a", "e", "i", "o", "u"];
//     total =
//       str.match(/a/g) +
//       str.match(/e/g) +
//       str.match(/i/g) +
//       str.match(/o/g) +
//       str.match(/u/g);
//   if no vowels, total = undefined
//     if (total) {
//       return total.length;
//     } else {
//       return 0;
//
//     }
//   }
