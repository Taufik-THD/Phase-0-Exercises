var input = 'Javascript'

function balikString() {

  i--
  hasil += input[i]

    if (i === 0) {
      console.log(hasil);
    }else {
      return balikString();
    }

}

  let i = input.length
  let hasil = ''

balikString()



//===================================================

// function balikString() {
//
//   console.log(input.split('').reverse().join(''));
//
// }
//
// let input = "hello world!"
//
// balikString()

//===================================================

// function balikString() {
//
//   let balik = []
//
//   for (var i = input.length-1; i >= 0 ; i--) {
//     balik.push(input[i])
//   }
//
//   let result = balik.join('')
//
//   console.log(result);
//
// }
//
// let input = "hello world!"
//
// balikString()

//===================================================

// function balikString(input) {
//
//   let balik = ''
//
//   for (var i = input.length-1; i > 0; i--) {
//     balik += input[i]
//   }
//
//   return balik
// }
//
// console.log(balikString('hello world!'));

//===================================================
