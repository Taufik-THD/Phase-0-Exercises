function konversiMenit(menit) {

let m = Math.floor(menit / 60)
let detik = menit % 60

return detik < 10 ? m + ':' + 0 + detik : m + ':' + detik
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
