// FUNCTION COMPOSITION

function add(a, b) {
  return a + b;
}

function multiply(args) {
  return args[0] * args[1];
}

function square(val) {
  return val * val;
}

// simplest form
function composeTwoFunctions(fn1, fn2) {
  return function (x, y) {
    return fn2(fn1(x, y));
  };
}

// es6 modern way
const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

// for unlimited functions
function compose(...fns) {
  return function (...value) {
    return fns.reduce((a, b) => b(a), value);
  };
}

const task = compose(multiply, square);
console.log(task(2, 3));
