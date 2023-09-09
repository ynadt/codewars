// Handshake problem
// 6 kyu
// ❓ DESCRIPTION:
// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
//
//     Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.
//
//     However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.
//
//     Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

//✅ SOLUTION:
// MINE:
function getParticipants(handshakes) {
  if (handshakes === 0) return 0;
  return (people = Math.ceil((1 + Math.sqrt(8 * handshakes + 1)) / 2));
}

console.log("solution: ", getParticipants(2));

// VERSION 1
// function getParticipants(handshakes){
//   let farmers = 0
//   while(handshakes > farmers * (farmers - 1) / 2){
//     farmers++
//   }
//   return farmers
// }

// VERSION 2
// function getParticipants(handshakes){
//   let x = handshakes
//   let participants = 0
//   while (x > 0) {
//     x = x - participants
//     participants++
//   }
//   return participants
// }

// VERSION 3
// function getParticipants(handshakes){
//   const discriminant = 1 + 8 * handshakes;
//   const positiveRoot = Math.ceil ( (1 + Math.pow(discriminant, 0.5)) / 2 );
//   return (positiveRoot > 1) ? positiveRoot : 0;
// }

/*
The task is the reverse task of determining the number
of connections (H) between points:
H = N * (N - 1) / 2,
where N is the number of points.
The result is the solution of the quadratic equation:
N * N - N - 2 * H = 0
Discriminant D = 1 + 8 * H
According to the conditions of the task, H >= 0 is always
used, then only a positive root of the equation is needed:
H1 = (1 + sqrt(D))/ 2
Since the answer must be an integer, we need to return the
value of H1, rounded up. The case H1 <= 1 contradicts the
conditions of the problem (at least two people are needed
to make a handshake), then the answer is 0.

Задача является обратной задаче определения количества связей (H)
между точками:
H = N * (N - 1) / 2,
где N - количество точек.
Результат представляет решение квадратного уравнения:
N * N - N - 2 * H = 0
Дискриминант D = 1 + 8 * H
По условиям задачи всегда H >= 0, тогда нужен только положительный
корень уравнения:
H1 = (1 + sqrt(D))/ 2
Поскольку ответом должно быть целое число, то нужно вернуть значение
H1, округленное вверх. Если H1 <= 1, то это противоречит условиям
задачи (для совершения рукопожатия нужно минимум два человека),
тогда ответ 0.
*/
