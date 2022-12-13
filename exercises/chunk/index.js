// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Doing it again - July 15, 2022
// Total Time: 44 Minutes
function chunk(array, size) {
  // edge cases
  if (size < 0 || !array) {
    console.log("The array is undefined");
    return;
  }
  //   Rounds up
  const subArrays = Math.ceil(array.length / size);

  //   Create the array of subarrays
  const chunked = [];
  for (i = 0; i < subArrays; i++) {
    chunked.push([]);
  }

  //   Push values into the subarrays
  //   Counter indexes through the original array.
  let counter = 0;
  //   Outer Loop: Subarrays
  for (i = 0; i < subArrays; i++) {
    // Inner Loop: Pushing values into the subarrays
    for (j = 0; j < size; j++) {
      chunked[i][j] = array[counter];
      counter++;
    }
  }

  return chunked;
}

// Tests
// Normal Case
const chunked = chunk([1, 2, 3, 4], 2); // [[1,2],[3,4]]
const solution = [
  [1, 2],
  [3, 4],
];

// Test that the arrays are equal
for (let i = 0; i < chunked.length; i++) {
  for (let j = 0; j < 2; j++) {
    if (chunked[i][j] !== solution[i][j]) {
      console.log("not equal");
    }
  }
}

// // Edge case
// const chunkedTwo = chunk([], -1);

// console.log("ChunkedTwo:", chunkedTwo);

// // Uneven Aray
// const chunkedThree = chunk([1, 2, 3, 4, 5], 2);

// console.log("ChunkedThree:", chunkedThree);

module.exports = chunk;
