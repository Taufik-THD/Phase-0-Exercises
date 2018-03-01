// Indentasi di dalem if

function pasanganTerbesar(num) {
  // you can only write your code here!

  let strNum = String(num)
  let angkaTerbesar = 0
  for(let i = 0 ; i < strNum.length ; i++){

    if ((strNum[i] +strNum[i+1]) > angkaTerbesar) {

    angkaTerbesar =  +(strNum[i] +strNum[i+1])

    }
  }

  return angkaTerbesar

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


//=======================================================

// let stringNum = String(num)
// let tmpAngka = []
// for (var i = 0; i < stringNum.length; i++) {
//   if (i === stringNum.length-1) {
//     break;
//   }
//   tmpAngka.push(+(stringNum[i] + stringNum[i+1]))
// }
// return tmpAngka.sort()[tmpAngka.length-1]

//=======================================================

// let stringNum = String(num)
// let tmp = []
// for (var i = 0; i < stringNum.length-1; i++) {
//   tmp.push(stringNum[i] +stringNum[i+1])
// }
// tmp.sort()
// return +tmp[tmp.length-1]

//===================================================
