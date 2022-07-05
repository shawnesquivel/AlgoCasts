// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, step = "") {
  // recursion solution
  // n = 2 - 4 spots
  //  n = 3 - 9 spots to fill, thus O(n^2) - quadratic runtime.
  //  base case -  last row
  if (n === row) {
    return;
  }
  //   if at the end of the columns
  if (step.length === n) {
    console.log(step);
    steps(n, row + 1);
    return;
  }
  //   add a # or ' '
  if (step.length <= row) {
    step += "#";
  } else {
    step += " ";
  }
  //   repeat
  steps(n, row, step);
}
// function steps(n) {
//   // row/column solution
//   for (let row = 0; row < n; row++) {
//     var stair = "";
//     for (let col = 0; col < n; col++) {
//       if (col > row) {
//         stair += " ";
//       } else {
//         stair += "#";
//       }
//     }
//     console.log(stair);
//   }
// }

module.exports = steps;

// Shawn Solution -- Too complicated
// function steps(n) {
//     var step = "#";

//     while (step.length < n) {
//       step += " ";
//     }

//     console.log(step);

//     for (let i = 1; i < n; i++) {
//       // Turn it into an array since JS strings are immutable
//       var arrStep = step.split("");
//       arrStep[i] = "#";
//       step = arrStep.join("");
//       console.log(step);
//     }
//   }
