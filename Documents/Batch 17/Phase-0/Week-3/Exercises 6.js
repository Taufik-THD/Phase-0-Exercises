function angkaPalindrome(num) {
  // you can only write your code here!
  num++

  let balik = +(String(num).split('').reverse().join(''))

  if (balik === num) {
    return num
  }else {
    return angkaPalindrome(num)
  }

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


//===================================================


// num++
// for (var i = num; i > 0; i++) {
//   num = i
//   let balik = +(String(num).split('').reverse().join(''))
//   if (num === balik) {
//     break ;
//   }
// }
//
// return num

//===================================================

// num++
// let balik = '';
//
// for (var i = String(num).length-1; i >= 0; i--) {
//   balik += String(num)[i]
// }
//
// if (+balik === num) {
//   return balik
// }else {
//   return angkaPalindrome(num);
// }

//===================================================

// while (true) {
//
//   num++
//
//   let balik = ''
//
//   for (var i = String(num).length-1; i >= 0 ; i--) {
//     balik += String(num)[i]
//   }
//
//   if (num === +(balik)) {
//     return num
//   }
// }

//===================================================
