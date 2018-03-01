function lowestLocalMaximum(firstArr, secondArr) {
  // only write code here
  let angkaPertama = firstArr[0]
  let angkaKedua = secondArr[0]

  for (var i = 0; i < firstArr.length; i++) {
    if (firstArr[i] > angkaPertama) {
      angkaPertama = firstArr[i]
    }
  }

  for (var j = 0; j < secondArr.length; j++) {
    if (secondArr[j] > angkaKedua) {
      angkaKedua = secondArr[j]
    }
  }

return angkaKedua < angkaPertama ? angkaKedua : angkaPertama;

}

console.log(lowestLocalMaximum([1, 1, 1] , [8, 15, 17, 9])); // 1
console.log(lowestLocalMaximum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 12
console.log(lowestLocalMaximum([1, 2, 5, 2, 2] , [67, 45, 55])); // 5
console.log(lowestLocalMaximum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 10
console.log(lowestLocalMaximum([5, 11, 18, 6], [3, 1, 8, 13])); // 13
