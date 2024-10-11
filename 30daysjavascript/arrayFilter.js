// ================= ARRAY FILTER =================

const filter = function (arr, fn) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    const val = fn(arr[i], i);
    if (val) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

const condFirst = filter(
  (arr = [0, 10, 20, 30]),
  (fn = function greaterThan10(n) {
    return n > 10;
  })
);
console.log(condFirst);

const condSecond = filter(
  (arr = [1, 2, 3]),
  (fn = function firstIndex(n, i) {
    return i === 0;
  })
);
console.log(condSecond);

const condThird = filter(
  (arr = [-2, -1, 0, 1, 2]),
  (fn = function plusOne(n) {
    return n + 1;
  })
);
console.log(condThird);
