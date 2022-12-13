// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanStr(stringA) == cleanStr(stringB);
}
const cleanStr = function (str) {
  return str.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");
};

module.exports = anagrams;
// function anagrams(stringA, stringB) {
//   const strToCharMap = function (str) {
//     // remove special characters
//     str = str.replace(/[^\w]/gi, "").toLowerCase();
//     var charMap = {};
//     // create character map
//     for (char of str) {
//       if (!charMap[char]) {
//         charMap[char] = 1;
//       } else {
//         charMap[char]++;
//       }
//     }
//     return charMap;
//   };

//   objA = strToCharMap(stringA);
//   objB = strToCharMap(stringB);

//   console.log(objA, objB);

//   //   If objA keys does not equal objB keys, return false
//   if (Object.keys(objA).length !== Object.keys(objB).length) return false;

//   // array - of, object - in
//   for (let char in objA) {
//     if (objA[char] !== objB[char]) {
//       return false;
//     }
//   }

//   return true;
// }
