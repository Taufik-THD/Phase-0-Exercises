// Langsung return ae splitted.length xD

function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let splitted = kalimat.split(' ')
  let jumlah = 0

  for (var i = 0; i < splitted.length; i++) {

    jumlah += 1

  }
  return jumlah
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

//===================================================

// let jumlahSpasi = 1
//
//    for (var i = kalimat.length-1; i >= 0; i--) {
//      if (kalimat[i] === ' ') {
//        jumlahSpasi += 1
//      }
//    }
//
// return jumlahSpasi

//===================================================

//return kalimat.split(' ').length

//===================================================
