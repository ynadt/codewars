// Walk the Object Path
// 6 kyu
// ❓ DESCRIPTION:
// Implement the method find which takes in an two parameters object and path. The path will be a period-delimited string of properties that we will use to traverse through our object to find our target value.
//
//     Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790
//
// Edge Cases And Further Consideration
// Be sure to handle passing array indices. For example, if we have an object: { people: ['John', 'Dave', 'Lisa'] } and the path is 'people.1', the target value is 'Dave' which is the string at position 1 inside of the people array.
//
//     Also this method should handle invalid paths. If we have an object { user: { name: 'Dan' } } and the path is 'user.wallet.money', we should return undefined. Valid paths are exclusive to properties on the object which are not inherited, in other words it is specific to this object and does not need to look up the prototype chain.

//✅ SOLUTION:
let q = console.log;
// MINE 1:
// function find(object, path) {
//   let propArray = path.split(".");
//   let currentRes;
//   for (let i = 0; i < propArray.length; i++) {
//     if (i === 0) {
//       if (object.hasOwnProperty(propArray[0])) {
//         currentRes = object[propArray[0]];
//       } else {
//         return currentRes;
//       }
//     }
//     if (i !== 0) {
//       if (currentRes.hasOwnProperty(propArray[i])) {
//         currentRes = currentRes[propArray[i]];
//       } else {
//         return undefined;
//       }
//     }
//   }
//   return currentRes;
// }

// MINE 2:
function find(object, path) {
  let propArray = path.split(".");
  let currentRes = object;
  for (let prop in propArray) {
    if (currentRes.hasOwnProperty(propArray[prop])) {
      currentRes = currentRes[propArray[prop]];
    } else {
      return undefined;
    }
  }
  return currentRes;
}

console.log(
  "Expected solution is  'Dave'. My solution: ",
  find({ people: ["John", "Dave", "Lisa"] }, "people.1"),
);

// VERSION 1
// function find(object, path) {
//   let arrPath = path.split(".");
//
//   for (let item of arrPath) {
//     if (object.hasOwnProperty(item)) {
//       object = object[item];
//     } else {
//       object = undefined;
//       break;
//     }
//   }
//   return object;
// }
