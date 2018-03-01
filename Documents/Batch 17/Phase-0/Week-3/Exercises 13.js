function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = []
  let indexX = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      indexO.push(arr.indexOf(arr[i]))
    }
    if (arr[i] === 'x') {
      indexX.push(i)
    }
  }
  let temp = ''
  for (var j = 0; j < indexX.length; j++) {
    if (indexO > indexX[j]) {
      temp = indexO - indexX[indexX.length-1]
    }
    else if (indexO < indexX[j]) {
      temp = indexX[0] - indexO
    }
  }
  return Math.abs(temp)
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2



//===================================================

// let indexO = []
// let indexX = []
//
// for (var i = 0; i < arr.length; i++) {
//
//   if (arr[i] === 'o') {
//     indexO.push(i+1)
//
//   }else if (arr[i] === 'x') {
//     indexX.push(i+1)
//   }
//
// }
//
// if (indexX[0] > indexO) {
//
//     return parseInt(indexX) - parseInt(indexO)
//
// } else if (indexX.toString().length === 0 || indexX.toString().length === 0) {
//
//     return 0
//
// } else {
//
//     arr.reverse()
//     return targetTerdekat(arr)
//
// }


//===================================================

// const oIndex = arr.indexOf('o');
//   const xIndex = arr.indexOf('x');
//
//   if (xIndex === -1){
//     return 0;
//   }
//
//   if (oIndex < xIndex){
//     return xIndex - oIndex;
//   }
//
//   return oIndex - arr.lastIndexOf('x');


//===================================================

// let indexO = 0;
//   let indexX = 0;
//
//     for (var i = 0; i < arr.length; i++) {
//
//         if (arr[i] === 'o') {
//           indexO = i+1
//         }else if(arr[i] === 'x'){
//           indexX = i+1
//           break;
//         }
//
//     }
//
//     if (indexO === 0) {
//
//       for (var j = arr.length-1; j >= 0; j--) {
//         if (arr[j] === 'o') {
//           indexO = j + 1
//         }else if (arr[j] === 'x') {
//           indexX = j + 1
//           break;
//         }
//       }
//
//       return indexO - indexX
//
//     }else if (indexX === 0) {
//
//       return 0
//
//     }
//
//   return indexX - indexO

//===================================================
