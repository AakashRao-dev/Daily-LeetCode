const compose = function (functions) {
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

const task1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(task1(4));

const task2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(task2(1));

const task3 = compose([]);
console.log(task3(42));
