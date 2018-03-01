function ubahHuruf(kata) {
  // you can only write your code here!
  let specialCharacter = 'abcdefghijklmnopqrstuvwxyz'
  let urutan = []
  let result = []

  for (var i = 0; i < kata.length; i++) {

    for (var j = 0; j < specialCharacter.length; j++) {
      if (specialCharacter[j] === kata[i]) {
        urutan.push(j)
      }
    }

  }

  for (var k = 0; k < urutan.length; k++) {
    result.push(specialCharacter[urutan[k]+1])
  }

  return result.join('')
  
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
