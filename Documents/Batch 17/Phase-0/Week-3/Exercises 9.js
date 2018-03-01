function cariMean(arr) {
  // you can only write your code here!

  let total = 0

  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return Math.round(total/arr.length)

}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

//==============================================================================

//const cariMean = arr => Math.round(arr.reduce((a, b) => a + b) / arr.length);

//==============================================================================

// return Math.round(arr.reduce(function (a,b) { return a + b  }) / arr.length)

//==============================================================================

// let total = 0
// let length = arr.length-1
//
// function kali() {
//   if (length === -1) {
//     return total
//   }else {
//     total += arr[length]
//     length--
//     return kali()
//   }
// }
//
// return Math.round(kali()/arr.length)
//
// }

//==============================================================================
