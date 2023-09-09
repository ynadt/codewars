// Human readable duration format
// 4 kyu
// ❓ DESCRIPTION:
// /Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
//     It is much easier to understand with an example:
//
// * For seconds = 62, your function should return
// "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
// "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
//
//     Note that spaces are important.
//
//     Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
//
//     A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
//     Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
//     A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
//
//     A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

//✅ SOLUTION:
// MINE:
function formatDuration(seconds) {
  if (seconds === 0) return "now";

  let minutes;
  let hours;
  let days;
  let years;

  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  days = Math.floor(hours / 24);
  hours = hours % 24;
  years = Math.floor(days / 365);
  days = days % 365;

  let time = [
    { num: years, type: "year" },
    { num: days, type: "day" },
    { num: hours, type: "hour" },
    { num: minutes, type: "minute" },
    { num: seconds, type: "second" },
  ];

  let res = [];
  time.forEach(function (item) {
    if (item.num === 1) res.push(`1 ${item.type}`);
    if (item.num > 1) res.push(`${item.num} ${item.type}s`);
  });

  if (res.length > 1) {
    res[res.length - 1] = ` and ${res[res.length - 1]}`;
  }
  if (res.length > 2) {
    res.forEach((item, index, res) => {
      if (index < res.length - 2) {
        res[index] = item + ", ";
      }
    });
  }
  return res.join("");
}

console.log("solution: ", formatDuration(86400));

// VERSION 1
// function formatDuration (seconds) {
//   if(!seconds)return "now";
//   var strout = "";
//   var s = seconds%60;
//   seconds = (seconds-s)/60;
//   var m = seconds%60;
//   seconds = (seconds-m)/60;
//   var h = seconds%24;
//   seconds = (seconds-h)/24;
//   var d = seconds%365;
//   seconds = (seconds-d)/365;
//   var y = seconds;
//
//   var english=[];
//   if(y)english.push(y+" year"+(y>1?'s':''));
//   if(d)english.push(d+" day"+(d>1?'s':''));
//   if(h)english.push(h+" hour"+(h>1?'s':''));
//   if(m)english.push(m+" minute"+(m>1?'s':''));
//   if(s)english.push(s+" second"+(s>1?'s':''));
//
//   return english.join(", ").replace(/,([^,]*)$/," and$1");
//
// }
