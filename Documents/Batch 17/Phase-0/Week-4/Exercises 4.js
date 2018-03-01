function cariModus(arr) {
  // you can only write your code here!
  arr.sort((a,b) => a-b)

  let length = []
  let tmp = []
  let isi = []

  if (arr[0] === arr[arr.length-1]) {
    return -1
  } else {

    for (var i = 0; i < arr.length; i++) {

      if (arr[i] === arr[i+1]) {

        isi.push(arr[i])

      }else {

        tmp.push(isi)
        isi = []

      }

    }

    for (var j = 0; j < tmp.length; j++) {

      length.push(tmp[j].length)

    }

    let panjang = 0

    for (var k = 0; k < length.length; k++) {

      if (panjang < length[k]) {

        panjang = length[k]

      }

    }

    let index = length.indexOf(panjang)

    return panjang === 0 ? -1 : +(String(tmp[index])[0])

  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 6, 4, 2, 6, 6, 8, 7, 6, 6, 6])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

//

// arr.sort(function (a, b) {
//   return a - b
// })
//
// if (arr[0] === arr[arr.length-1]) {
//   return -1
// }
//
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i+1]) {
//     return arr[i]
//   }
// }
//
// return -1
