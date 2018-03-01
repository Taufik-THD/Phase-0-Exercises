function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let tmp = []

  for (var i = 0; i <= angka; i++) {
    for (var j = 0; j <= angka; j++) {
      if (i * j === angka) {
        tmp.push(i+''+j)
      }
    }
  }

  tmp.sort(function (a,b) {
    return a-b
  })

  return tmp[0].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
