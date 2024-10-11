// ================= ARRAY TRANSFORM =================

// Return arr condition -> returnedArray[i] = fn(arr[i], i)
const map = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};

const firstCond = map(
  (arr = [1, 2, 3]),
  (fn = function plusone(n) {
    return n + 1;
  })
);
console.log(firstCond);
// Expected - [2,3,4]
// Returned - [2, 3, 4]

const secondCond = map(
  (arr = [1, 2, 3]),
  (fn = function plusI(n, i) {
    return n + i;
  })
);
console.log(secondCond);
// Expected - [1,3,5]
// Returned - [1, 3, 5]

const thirdCond = map(
  (arr = [10, 20, 30]),
  (fn = function constant() {
    return 42;
  })
);
console.log(thirdCond);
// Expected - [42,42,42]
// Returned - [42, 42, 42]
