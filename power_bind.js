// Power .bind()
// 6 kyu

// ❓ DESCRIPTION:
// You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but this function will always be called in the specified context. The problem is that you can't rebind another context anymore.
//
// var func = function () {
//   return this.prop;
// };
// var obj1 = {prop: 1},
//     obj2 = {prop: 2};
//
// func = func.bind(obj1);
// func(); // Will produce 1
//
// func = func.bind(obj2);
// func(); // Will also produce 1 :(
// Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. In this kata you don't need to worry about currying, testing function will never get params.

//✅ SOLUTION:

// MINE:
const obj1 = { o: 1 };
const obj2 = { o: 2 };

function prn() {
  console.log(JSON.stringify(this));
}

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    const rightCtx = this === globalThis ? ctx : this;
    return func.apply(rightCtx, args);
  };
};

const prn1 = prn.bind(obj1);
prn1();

const prn2 = prn1.bind(obj2);
prn2();

// VERSION 1
// Function.prototype.bind = function (rootContext) {
//   return (childContext = rootContext) => this.call(childContext, childContext);
// };

// VERSION 2
// Function.prototype.bind = function (ctx) {
//   var fn = this;
//   return function () {
//     if (this && this.prop) {
//       return fn.apply(this);
//     }
//     return fn.apply(ctx);
//   };
// };
