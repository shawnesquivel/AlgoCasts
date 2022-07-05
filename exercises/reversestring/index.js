// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 - Mine
// function reverse(str) {
//   var newStr = "";
//   const n = str.length - 1;
//   for (i = n; i > -1; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// Solution 2 - Use Reverse Array
// function reverse(str) {
// Solution 2a - Use destructuring
//   var newStrArray = [...str];
//   Solution 2b - Use split
//   var newStrArray = str.split("");
//   newStrArray = newStrArray.reverse();
//   var newStr = "";

//   Clunky Way - Use a For Loop
//   for (i = 0; i < str.length; i++) {
//     newStr += newStrArray[i];
//   }
// Slicker Way - Use .join which combines an array
//   newStr = newStrArray.join("");
//   return newStr
//   The summary
//   return str.split("").reverse().join("");
// }

// Solution 3 - Use the Reduce Method

function reverse(str) {
  // Run time complexity: O(n)
  // Each additional char = one additional step through loop
  newStr = str.split("").reduce((char, rev) => rev + char, "");
  return newStr;
}

reverse("abcd");

module.exports = reverse;
