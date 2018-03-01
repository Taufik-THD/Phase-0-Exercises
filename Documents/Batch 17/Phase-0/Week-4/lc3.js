function arrayMapper(targetArr, operator, effect) {
  // only write code here
  let hasil = []

  for (var i = 0; i < targetArr.length; i++) {
    if (operator === '-') {
      hasil.push(targetArr[i] - effect)
    }else if (operator === '+') {
      hasil.push(targetArr[i] + effect)
    }else {
      hasil.push(targetArr[i] / effect)
    }
  }

  return hasil;
}

console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
console.log(arrayMapper([1, 5, 3, 4], '+', 1)); // [2, 6, 4, 5]
console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]
