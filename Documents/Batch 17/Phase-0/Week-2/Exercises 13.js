function xo(str) {

let x = ''
let o = ''

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      x += 'x'
    }else {
      o += 'o'
    }
  }

 return x.length === o.length
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
