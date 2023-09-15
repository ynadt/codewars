// Javascript Mathematician
// 7 kyu
// ❓ DESCRIPTION:
// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
//     The function should contain at least 1 argument per set.
//
// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17

//✅ SOLUTION:
// MINE:
function calculate(...args1) {
  return (...args2) =>
    [...args1, ...args2].reduce((acc, item) => acc + item, 0);
}

console.log(
  "Expected solution is  17. My solution: ",
  calculate(2, 4)(3, 7, 1),
);

// VERSION 1
// const calculate =
//   (...args1) =>
//   (...args2) =>
//     [...args1, ...args2].reduce((s, v) => s + v);

// VERSION 2!!!
// function calculate(...a) {
//   return function (...b) {
//     return [...a, ...b].reduce((sum, n) => sum + n);
//   };
// }

// function calculate() {
//   var first = 0;
//   for (var i = 0; i < arguments.length; i += 1) {
//     first += arguments[i];
//   }
//   return function () {
//     var second = 0;
//     for (var j = 0; j < arguments.length; j += 1) {
//       second += arguments[j];
//     }
//     return first + second;
//   };
// }
