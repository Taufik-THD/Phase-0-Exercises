function kaliTerusRekursif(angka) {
  // you can only write your code here!

  if (angka < 10) {

    return angka

  }

  return kaliTerusRekursif(+(String(angka)[0]) * kaliTerusRekursif(+(String(angka).slice(1))))

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6



// if (input < 10) {
//   return input;
// }
//
// const hasilPerkalian = +(String(input)[0]) * kaliTerusRekursif(+(String(input).slice(1)));
//
// return kaliTerusRekursif(hasilPerkalian);



//
// for (var i = 0; i < String(angka).length; i++) {
//
//   total *= +(String(angka)[i])
//
// }
