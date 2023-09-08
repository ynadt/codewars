// Which color is the brightest?
// 7 kyu
// ❓ DESCRIPTION:
// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.
//
// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
//
// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
//
// For example,
//
// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one:
//
// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
// Note that both input and output should use upper case for characters A, B, C, D, E, F.

//✅ SOLUTION:
// MINE:
function brightest(colors) {
  let arr = colors.reduce(function (acc, color) {
    let r = parseInt(color.toUpperCase().slice(1, 3), 16);
    let g = parseInt(color.toUpperCase().slice(3, 5), 16);
    let b = parseInt(color.toUpperCase().slice(5), 16);
    acc.push({ color, brightness: Math.max(r, g, b) });
    return acc;
  }, []);

  arr.sort((a, b) => b.brightness - a.brightness);
  return arr[0].color;
}

console.log("solution: ", brightest(["#00FF00", "#FFFF00", "#01130F"]));

// VERSION 1
// function brightest(colors) {
//     function searchMax(str) {
//         let r = parseInt((str[1] + str[2]), 16);
//         let g = parseInt((str[3] + str[4]), 16);
//         let b = parseInt((str[5] + str[6]), 16);
//         return Math.max(r, g, b);
//     };
//     colors.sort((a, b) => searchMax(b) - searchMax(a));
//     return colors[0];
// };

// VERSION 2
// function brightest(colors){
//     let index = 0;
//     let maxValue = 0;
//     for(let i = 0; i < colors.length; i++) {
//         let color = colors[i];
//         let r = parseInt(color.slice(1,3),16);
//         let g = parseInt(color.slice(3,5),16);
//         let b = parseInt(color.slice(5,7),16);
//         let value = Math.max(r,g,b)
//         if (value > maxValue) {
//             maxValue = value
//             index = i
//         }
//     }
//     return colors[index]
// }

// VERSION 3
// function brightest(colors){
//     const rgb = colors.map(c => {
//         const r = parseInt(c.slice(1, 3), 16);
//         const g = parseInt(c.slice(3, 5), 16);
//         const b = parseInt(c.slice(5, 7), 16);
//
//         return Math.max(r, g, b);
//     });
//     const max = Math.max(...rgb);
//     return colors[rgb.indexOf(max)];
// }
