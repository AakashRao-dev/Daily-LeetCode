var once = function (fn) {
  let called = true;
  return function (...args) {
    if (called) {
      called = false;
      return fn(...args);
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
