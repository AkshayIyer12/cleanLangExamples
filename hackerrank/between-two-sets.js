const a = [
  2,
  4
];
const b = [
  16,
  32,
  96
];
const gcd = (a, b) => {
  switch (a) {
  case 0:
    return b;
  default:
    return gcd(b % a, a)
  }
};
const lcm = (a, b) => a * b / gcd(a, b);
const first = a.reduce(lcm);
const second = b.reduce(gcd);
const betweenTwoSets = (acc, a, b) => a > b ? acc : b % a === 0 ? betweenTwoSets(acc + 1, first + a, b) : betweenTwoSets(acc, first + a, b);
console.log(first);
console.log(second);
console.log(betweenTwoSets(0, first, second))
