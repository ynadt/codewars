// Isograms
// 7 kyu

// ❓ DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//✅ SOLUTION:

// MINE:
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log("solution: ", isIsogram("moose"));
console.log("solution: ", isIsogram("Dermatoglyphics"));

// VERSION 1
// function isIsogram(str) {
//   str_lc = str.toLowerCase();
//   var letters = str_lc.split("");
//   var check4uniqueness = function (value, index, self) {
//     return self.indexOf(value) === index;
//   };
//   return letters.filter(check4uniqueness).length == str.length;
// }
// Downcase everything, split on letters.
// Checks whether the given "value" at "index" is actually first encountered at this "index" position within a string ("self").
// Expected to be used with Array#filter.
// An isogram string contains no duplicate, hence must have the same
// length than the array composed of unique letters from that string.
