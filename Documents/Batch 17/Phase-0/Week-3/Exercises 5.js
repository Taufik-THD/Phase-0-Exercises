function palindrome(kata) {
  // you can only write your code here!
  let balikKata = ''
  for (var i = kata.length-1; i >= 0 ; i--) {
    balikKata += kata[i]
  }

  return kata === balikKata


}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

//===================================================

// return kata === kata.split('').reverse().join('')

//===================================================

// function palindrome(kata) {
//   // you can only write your code here!
//   let balikKata = ''
//   let panjang = kata.length
//
//   function balik() {
//     panjang--
//     balikKata += kata[panjang]
//     if (panjang === 0) {
//       return balikKata
//     }else {
//       return balik()
//     }
//   }
//
//   return kata === balik()
//
// }

//===================================================
