// Angle Between Clock Hands
// 6 kyu
// ❓ DESCRIPTION:
// Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between the two hands of a 12-hour analog clock in radians.
//
//     Notes:
// The minute hand always points to the exact minute (there is no seconds hand).
// The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
// Return the smaller of the angles ( <= π ).
// Return π if the hands are opposite.
//     Examples
// at noon the angle is: 0
// at 3:00 the angle is: π/2 (90 degrees)
// at 6:00 the angle is: π (180 degrees)
// at 9:00 the angle is: π/2 (90 degrees)

//✅ SOLUTION:
// MINE:
function handAngle(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const minuteAngle = minutes * 6;
  const hourAngle = hours * 30 + minutes * 0.5;
  const angle = Math.abs(hourAngle - minuteAngle);
  return (Math.min(angle, 360 - angle) * Math.PI) / 180;
}

console.log(
  "Expected solution is  1.4398966328953218. My solution: ",
  handAngle(new Date("September 18, 2023 00:15:24")),
);
