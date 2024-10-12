const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 10 },
  { name: 'Phone', price: 5 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

// 8 ARRAY METHODS

// filter
const filterItems = items.filter(item => {
  return item.name <= 100;
});
console.log(filterItems);

// map
const itemsName = items.map(item => {
  return item.name;
});
console.log(itemsName);

// find
const findItem = items.find(item => {
  return item.name === 'Book';
});
console.log(findItem);

// forEach
items.forEach(item => {
  console.log(item.price);
});

// some -> true/false (anyValue)
const hasInExpensiveItems = items.some(item => {
  return item.price <= 100;
});
console.log(hasInExpensiveItems);

// every -> true/false (range allValues)
const hasInExpensiveRange = items.every(item => {
  return item.price <= 1000;
});
console.log(hasInExpensiveRange);

// reduce
const totalPrice = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(totalPrice);

// includes
const arr = [1, 2, 3, 4, 5];
const includesTwo = arr.includes(7);
console.log(includesTwo);
