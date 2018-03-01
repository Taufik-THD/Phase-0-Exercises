function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let jarak = arr[1] / arr[0]

    for (var i = arr[0]; i < arr.length; i+=jarak) {

      if (i !== arr.length-1 && jarak !== (arr[i+1] / arr[i])) {

          return false

      }

    }

  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

//===================================================


// let tmp = []
//
// for (var i = arr[0]; i <= arr[arr.length-1]; i*= (arr[1] / arr[0])) {
//   tmp.push(i)
// }
//
// return String(tmp) === String(arr)

//===================================================
