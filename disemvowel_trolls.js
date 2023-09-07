// Disemvowel Trolls
// 7 kyu
// ❓ DESCRIPTION:
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
// Note: for this kata y isn't considered a vowel.

//✅ SOLUTION:

// MINE:
function disemvowel(str) {
  let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  return (res = str.split("").reduce(function (acc, el) {
    if (vowels.includes(el)) {
      return acc;
    }
    return acc + el;
  }, ""));
}

console.log("solution: ", disemvowel("This website is for losers LOL!"));

// VERSION 1
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
//
//
// VERSION 2
// const vowels = 'aeiou';
// function disemvowel(str) {
//   return str
//       .split('')
//       .filter(letter => !vowels.includes(letter.toLowerCase()))
//       .join('');
// }
