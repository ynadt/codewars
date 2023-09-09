// Pair of gloves
// 6 kyu
// ❓ DESCRIPTION:
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
//
//     Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
//
//     Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
//
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

//✅ SOLUTION:
// MINE:
function numberOfPairs(gloves) {
  const glovesCounted = gloves.reduce(function (result, item) {
    if (!(item in result)) {
      return {
        ...result,
        [item]: 1,
      };
    } else {
      return {
        ...result,
        [item]: result[item] + 1,
      };
    }
  }, {});
  console.log(glovesCounted);

  let numberOfPairs = 0;
  for (let key in glovesCounted) {
    if (glovesCounted[key] > 1) {
      numberOfPairs += Math.floor(glovesCounted[key] / 2);
    }
  }
  return numberOfPairs;
}

console.log(
  "solution: ",
  numberOfPairs(["red", "green", "red", "blue", "blue"]),
);

// VERSION 1
// function numberOfPairs(gloves) {
//   var pairs = 0,
//     counts = {};
//   for (var color of gloves) {
//     if (!counts.hasOwnProperty(color)) counts[color] = 0;
//     if (++counts[color] === 2) {
//       counts[color] -= 2;
//       pairs++;
//     }
//   }
//
//   return pairs;
// }

// VERSION 2
// function numberOfPairs(gloves) {
//   let counter = 0;
//   let copyGloves = [...gloves].sort();
//   for (let i = 0; i < copyGloves.length; i++) {
//     if (copyGloves[i] === copyGloves[i + 1]) {
//       counter++;
//       copyGloves.splice(i, 2);
//       i--;
//     }
//   }
//   return counter;
// }

// VERSION 3
// function numberOfPairs(gloves) {
//   const uniques = new Set(gloves);
//   let amount = 0;
//   for (let unique of uniques) {
//     const count = Math.floor(gloves.filter((pair) => pair === unique).length/2);
//     amount += count;
//   }
//   return amount;
// }
