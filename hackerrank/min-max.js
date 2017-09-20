const a = [
  1,
  2,
  3,
  4,
  5
];
const add = (a, b) => a + b;
const len = a.length - 1;
const total = a.reduce(add);
const first = a[0];
const last = a[len];
const min = total - last;
const max = total - first;
console.log(min, max)
