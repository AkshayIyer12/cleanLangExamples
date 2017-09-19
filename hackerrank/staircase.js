const concatStrType = (strType, count, accum) => count === 0 ? accum : concatStrType(strType, count - 1, accum + strType);
const produceStep = (str1, str2, len1, len2) => concatStrType(str1, len1, '') + concatStrType(str2, len2, '');
const printStairs = (h, count, acc) => count === h ? acc + produceStep(' ', '#', h - count, count) : printStairs(h, count + 1, acc + (produceStep(' ', '#', h - count, count) + '\n'));
console.log(printStairs(5, 1, ''))
