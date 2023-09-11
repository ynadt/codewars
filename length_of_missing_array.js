// Length of missing array
// 6 kyu

// ❓ DESCRIPTION:
// You get an array of arrays.
//     If you sort the arrays by their length, you will see, that their length-values are consecutive.
//     But one array is missing!
//
//     You have to write a method, that return the length of the missing array.
//
//     Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
//
// If the array of arrays is null/nil or empty, the method should return 0.
//
// When an array in the array is null or empty, the method should return 0 too!
//     There will always be a missing element and its length will be always between the given arrays.
//
//     Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have created other kata. Have a look if you like coding and challenges.

//✅ SOLUTION:

// MINE:
function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0;

  for (let arr of arrayOfArrays) {
    if (arr === null || arr.length === 0) return 0;
  }

  let res = arrayOfArrays
    .sort((a, b) => a.length - b.length)
    .map((item) => {
      return item.length;
    });

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i + 1] - res[i] !== 1) {
      return res[i] + 1;
    }
  }
}

console.log(
  "Expected solution is 2. My solution: ",
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
);
console.log(
  "Expected solution is 2. My solution: ",
  getLengthOfMissingArray([[null], [null, null, null]]),
);
console.log(
  "Expected solution is 0. My solution: ",
  getLengthOfMissingArray([]),
);
console.log(
  "Expected solution is 0. My solution: ",
  getLengthOfMissingArray([
    [1, 2, 0],
    [1],
    [1, 2, 4, 0, 1],
    [2, 1],
    [4, 0, 3, 0, 2, 3],
    [],
    [4, 4, 1, 1],
    [1, 1, 4, 2, 2, 3, 2, 0],
  ]),
);

// VERSION 1
// function getLengthOfMissingArray(arrayOfArrays) {
//   const lengths = (arrayOfArrays || [])
//     .map((a) => (a ? a.length : 0))
//     .sort((a, b) => a - b);
//
//   if (lengths.includes(0)) {
//     return 0;
//   }
//
//   for (let i = 0; i < lengths.length - 1; i++) {
//     if (lengths[i] + 1 !== lengths[i + 1]) {
//       return lengths[i] + 1;
//     }
//   }
//
//   return 0;
// }
