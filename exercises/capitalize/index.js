// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Capitalize based on if the left character is a space.

  // Assumes that the first letter is a letter
  let capStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      capStr += str[i].toUpperCase();
    } else {
      capStr += str[i];
    }
  }
  return capStr;
}

module.exports = capitalize;

// function capitalize(str) {
//     const arr = str.split(" ");
//     var capStr = [];
//     for (var element of arr) {
//       capStr.push(element[0].toUpperCase());
//       capStr.push(element.slice(1));
//       capStr.push(" ");
//     }

//     return capStr.join("").slice(0, -1);
//   }
