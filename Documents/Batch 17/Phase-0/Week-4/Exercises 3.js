function cariMedian(arr) {
  // you can only write your code here!
  let ganjil = Math.floor(arr.length/2)
  let genap = Math.floor(arr.length/2)

  return arr.length % 2 !== 0 ? arr[ganjil] : (arr[genap] + arr[genap-1])/2

}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5








// if (arr.length % 2 !== 0) {
//   return arr[Math.floor(arr.length/2)]
// }
// return (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2)-1])/2
