// Unlucky Days
// 7 kyu
// ❓ DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
//
//     Find the number of Friday 13th in the given year.
//
//     Input: Year in Gregorian calendar as integer.
//
//     Output: Number of Black Fridays in the year as an integer.
//
//     Examples:
//
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

//✅ SOLUTION:
// MINE:
function unluckyDays(year) {
  let unlucky = 0;
  for (let month = 1; month < 12; month++) {
    if (new Date(year, month, 13).getDay() === 5) {
      unlucky++;
    }
  }
  return unlucky;
}

console.log("Expected solution is  3. My solution: ", unluckyDays(2015));
