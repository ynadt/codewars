// Array Deep Count
// 6 kyu

// ❓ DESCRIPTION:
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
//
//     Examples
//     []                   -->  0
//     [1, 2, 3]            -->  3
//     ["x", "y", ["z"]]    -->  4
//     [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

//✅ SOLUTION:

// MINE:
function deepCount(a) {
  return a.reduce(function (acc, item) {
    if (!Array.isArray(item)) {
      return acc + 1;
    } else {
      acc += 1;
      return deepCount(item) + acc;
    }
  }, 0);
}

console.log("solution one: ", deepCount([]));
console.log("solution two: ", deepCount([1, 2, [3, 4, [5]]]));

// VERSION 1
// function deepCount(a){
//   let count = a.length;
//   for (let i=0; i<a.length; i++) {
//     if (Array.isArray(a[i])) {
//       count += deepCount(a[i]);
//     }
//   }
//   return count;
// }
