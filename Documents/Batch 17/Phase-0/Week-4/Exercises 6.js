function hitungHuruf(kata) {
  // you can only write your code here!
  let splitted = kata.split(' ')
  let hasil = []
  let arr = []
  let jumlahHuruf = 0
  kata = kata.split(' ')

  for (var i = 0; i < splitted.length; i++) {
    let arrayHitung = []
    for (var j = 0; j < splitted[i].length; j++) {

      for (var k = j; k < splitted[i].length; k++) {

        if (splitted[i][j] === splitted[i][k] && j !== k) {

          if (arrayHitung.indexOf(splitted[i][j]) === -1) {

            arrayHitung.push(splitted[i][j])
            jumlahHuruf += 1

          }

          splitted[i] = splitted[i].split('')
          splitted[i][k] = k
          splitted[i] = splitted[i].join('')

          jumlahHuruf += 1

        }

      }

      arr.push(jumlahHuruf)

      jumlahHuruf = 0

    }

    let total = arr.reduce(function (a,b){
      return a+b
    })

    hasil.push(total)

    arr = []

  }

  let angkaMax = 0

   for (var l = 0; l < hasil.length; l++) {
     if (angkaMax < hasil[l]) {
       angkaMax = hasil[l]
     }
   }

 return kata[hasil.indexOf(angkaMax)]

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
