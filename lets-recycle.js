// Let's Recycle!
// 6 kyu

// ❓ DESCRIPTION:
// You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.
//
//     Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
//
//     Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in both of the respective bins
// The order of the type's in each bin should be the same as the order of their respective objects was in the input list
// Example
// input = [
//     {"type": "rotten apples", "material": "organic"},
//     {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//     {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//     {"type": "amazon box", "material": "paper"},
//     {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]
//
// output = [
//     ["wine bottle", "amazon box", "beer bottle"],
//     ["wine bottle", "beer bottle"],
//     ["rotten apples", "out of date yogurt"],
//     ["out of date yogurt"]
// ]

//✅ SOLUTION:

// MINE:
function recycle(array) {
  let res = [[], [], [], []];
  array.forEach((item) => {
    switch (item.material) {
      case "paper":
        res[0].push(item.type);
        break;
      case "glass":
        res[1].push(item.type);
        break;
      case "organic":
        res[2].push(item.type);
        break;
      case "plastic":
        res[3].push(item.type);
    }
    switch (item.secondMaterial) {
      case "paper":
        res[0].push(item.type);
        break;
      case "glass":
        res[1].push(item.type);
        break;
      case "organic":
        res[2].push(item.type);
        break;
      case "plastic":
        res[3].push(item.type);
    }
  });
  return res;
}

console.log(
  "solution: ",
  recycle([
    { type: "rotten apples", material: "organic" },
    {
      type: "out of date yogurt",
      material: "organic",
      secondMaterial: "plastic",
    },
    { type: "wine bottle", material: "glass", secondMaterial: "paper" },
    { type: "amazon box", material: "paper" },
    { type: "beer bottle", material: "glass", secondMaterial: "paper" },
  ]),
);

// VERSION 1
// function recycle(arr) {
//   let paper = [], glass = [], organic = [], plastic = [];
//
//   arr.forEach(obj => {
//     if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
//     if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
//     if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
//     if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
//   });
//
//   return [paper, glass, organic, plastic]
// }

// VERSION 2
// const recyclerMaterials = ["paper", "glass", "organic", "plastic"];
// function recycle(objects) {
//   return recyclerMaterials.map((m) =>
//     objects
//       .filter((o) => o.material == m || o.secondMaterial == m)
//       .map((o) => o.type),
//   );
// }

// VERSION 3
// function recycle(array) {
//   let materials = { "paper": [], "glass": [], "organic": [], "plastic": [] }
//   array.forEach(o => {
//     materials[o.material].push(o.type);
//     if(o.secondMaterial)
//       materials[o.secondMaterial].push(o.type);
//   });
//   return Object.values(materials);
// }

// VERSION 4
// const recycle = (array) => {
//   const bin = [[], [], [], []];
//   array.forEach((item) => {
//     if (item.material === "paper" || item.secondMaterial === "paper") {
//       bin[0].push(item.type);
//     }
//     if (item.material === "glass" || item.secondMaterial === "glass") {
//       bin[1].push(item.type);
//     }
//     if (item.material === "organic" || item.secondMaterial === "organic") {
//       bin[2].push(item.type);
//     }
//     if (item.material === "plastic" || item.secondMaterial === "plastic") {
//       bin[3].push(item.type);
//     }
//   });
//   return bin;
// };
