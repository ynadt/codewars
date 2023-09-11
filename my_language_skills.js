// My Language Skills
// 7 kyu

// ❓ DESCRIPTION:
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
//
//     Note: the scores will always be unique (so no duplicate values)
//
// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

//✅ SOLUTION:

// MINE:
function myLanguages(results) {
  let lang = [];
  Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .forEach((item) => {
      if (item[1] >= 60) {
        lang.push(item[0]);
      }
    });
  return lang;
}

console.log(
  'Expected solution is  ["Ruby", "Python"]. My solution: ',
  myLanguages({ Java: 10, Ruby: 80, Python: 65 }),
);

// VERSION 1
// function myLanguages(results) {
//   console.log(Object.keys(results));
//   return Object.keys(results)
//     .filter((r) => results[r] > 59)
//     .sort((a, b) => results[b] - results[a]);
// }

// VERSION 2
// const myLanguages = (results) =>
//   Object.entries(results)
//     .filter(([name, points]) => points >= 60)
//     .sort(([name1, points1], [name2, points2]) => points2 - points1)
//     .map(([name, points]) => name);
