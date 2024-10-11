// ======================== COUNTER - II ========================

const createCounter = function (init) {
  let currentValue = init;
  return {
    increment() {
      return ++currentValue;
    },

    decrement() {
      return --currentValue;
    },

    reset() {
      currentValue = init;
      return currentValue;
    },
  };
};

const counter1 = createCounter(5);
console.log(counter1.increment(), counter1.reset(), counter1.decrement());
// 6 5 4

const counter2 = createCounter(0);
console.log(
  counter2.increment(),
  counter2.increment(),
  counter2.decrement(),
  counter2.reset(),
  counter2.reset()
);
// 1 2 1 0 0
