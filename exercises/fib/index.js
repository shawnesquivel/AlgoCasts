// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// Recursive
function memoize(fn) {
  // create the lookup table
  const cache = {};

  // return the memoized, faster function
  // ...args = spread parameter, returns the arguments as an array
  // note that arrow functions dont have an arguments object.
  return function (...args) {
    // if lookup result exists
    // args is the "key" that gives you the result, thus you must have an exact match on the args list to get the cached result.
    // e.g. if args = [37, 1], then cache[37,1] = value
    if (cache[args]) {
      return cache[args];
    }
    // allows you to pass the arguments as an array
    // the first parameter to apply send an object that will be referred to as "this" within the called function.g
    cache[args] = fn.apply(this, args);
    console.log(cache);
    return cache[args];
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  // references to the memoized version of fib
  return fib(n - 1) + fib(n - 2);
}

// pass the function into the lookup table
fib = memoize(fib);
module.exports = fib;

// For Loop - O(n)
// function fib(n) {
//   let series = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     series[i] = series[i - 2] + series[i - 1];
//   }
//   console.log(series);
//   return series[n];
// }
