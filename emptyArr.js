const len = arr => {
  switch (arr.length) {
    case 0:
      return 0
    default:
      return 5 + arr.slice(4)
  }
}
console.log(len([
  1,
  1,
  2,
  3,
  2,
  1,
  3
]))
