// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursive Solution
function pyramid(n, row = 0, level = "") {
  // base case
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const mid = Math.floor((2 * n - 1) / 2);
  if (level.length >= mid - row && level.length <= mid + row) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, level);
}

// Cleaner solution -- do this again.
// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       // col has to be greater than the a (start), less than the b(end)
//       if (col >= mid - row && col <= mid + row) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;

// Messy Way
// function spaces(n) {
//     var str = "";
//     while (str.length < n) {
//       str += " ";
//     }
//     return str;
//   }
//   function hashes(n) {
//     var str = "";
//     while (str.length < n) {
//       str += "#";
//     }
//     return str;
//   }

//   function pyramid(n, str = "", hash = 1, space = "") {
//     if (n === 0) {
//       console.log(hashes(hash));
//       return;
//     }

//     for (let row = 1; row < n; row++) {
//       if (row === 1) {
//         space ;= spaces(n - row);
//         console.log(space + hashes(hash) + space);
//       }
//       if (1 < row <= n) {
//         space = spaces(n - row - 1);
//         hash += 2;
//         console.log(space + hashes(hash) + space);
//       }
//     }
//   }
