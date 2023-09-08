// Head, Tail, Init and Last
// 7 kyu
// ❓ DESCRIPTION:
// Haskell has some useful functions for dealing with lists:
//
// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
//     λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
//     [2,3,4,5]
// λ init [1,2,3,4,5]
//     [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
//
//     | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |
//
// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:
//
// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]
// Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests

//✅ SOLUTION:

// MINE:
function head(arr) {
  let res = [...arr];
  return res[0];
}

function tail(arr) {
  let res = [...arr];
  res.shift();
  return res;
}

function init(arr) {
  let res = [...arr];
  res.pop();
  return res;
}

function last(arr) {
  let res = [...arr];
  return res.pop();
}

console.log("solution: ", head([1, 2, 3, 4, 5]));
console.log("solution: ", tail([1, 2, 3, 4, 5]));
console.log("solution: ", init([1, 2, 3, 4, 5]));
console.log("solution: ", last([1, 2, 3, 4, 5]));

// VERSION 1
// function head(a) {return a[0]}
// function last(a) {return a[a.length - 1]}
// function init(a) {return a.slice(0, -1)}
// function tail(a) {return a.slice(1)}
