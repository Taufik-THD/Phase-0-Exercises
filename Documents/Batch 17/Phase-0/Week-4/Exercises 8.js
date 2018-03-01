function urutkanAbjad(str) {
  // you can only write your code here!
  let specialCharacter = 'abcdefghijklmnopqrstuvwxyz'
  let urutan = []
  let hasil = []

  for (var i = 0; i < str.length; i++) {

    for (var j = 0; j < specialCharacter.length; j++) {
      if (specialCharacter[j] === str[i]) {
        urutan.push(j)
      }
    }
  }


  urutan.sort(function (a,b) {
    return a-b
  })

  for (var k = 0; k < urutan.length; k++) {
    hasil.push(specialCharacter[urutan[k]])
  }

  return hasil.join('')
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
