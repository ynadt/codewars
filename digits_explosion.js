// Digits explosion
// 7 kyu

// ❓ DESCRIPTION:
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
//
//     Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

//✅ SOLUTION:

// MINE:
function explode(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += s[i].repeat(+s[i]);
  }
  return res;
}

console.log("solution one: ", explode("312"));
console.log("solution two: ", explode("102269"));

// VERSION 1
// function explode(s) {
//   return s.split("").map((e) => e.repeat(+e)).join("");
// }
