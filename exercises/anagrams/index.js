// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function simplifyStr(str) {
  return str.replace(/[^\w]/gi, "").toLowerCase();
}

function buildCharMap(str) {
  const obj = {};
  for (const char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

function anagrams(stringA, stringB) {
  const strA = simplifyStr(stringA);
  const strB = simplifyStr(stringB);
  const objA = buildCharMap(strA);
  const objB = buildCharMap(strB);
  // they should have the same amount of unique chars
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (const char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
