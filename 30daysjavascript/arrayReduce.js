// ================= ARRAY REDUCE =================

const reduce = function (arr, fn, init) {
  let value = init;

  for (let i = 0; i < arr.length; i++) {
    value = fn(value, arr[i]);
  }

  if (arr.length === 0) {
    return init;
  } else {
    return value;
  }
};

const reduceFirst = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr;
  },
  0
);
console.log(reduceFirst);

const reduceSecond = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr * curr;
  },
  100
);
console.log(reduceSecond);

const reduceThird = reduce(
  [],
  function sum(accum, curr) {
    return 0;
  },
  25
);
console.log(reduceThird);
