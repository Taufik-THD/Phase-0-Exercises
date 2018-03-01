console.log('TUGAS 1' + '\n');
console.log('LOOPING WHILE PERTAMA' + '\n');

var i = 0
while (i < 20) {
  i += 2
  console.log(i + ' - I love coding');
}

console.log('\n' +'LOOPING WHILE KEDUA' + '\n');

var j = 20
while (j > 0) {
  console.log(j + ' - I will become fullstack developer');
  j -= 2
}

console.log('\n' + 'TUGAS 2' + '\n');
console.log('\n' + 'LOOPING FOR PERTAMA' + '\n');

for (var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}

console.log('\n' +'LOOPING FOR KEDUA' + '\n');

for (var j = 20; j > 0; j--) {
  console.log(j + ' - I will become fullstack developer');
}

console.log('\n' +'TUGAS 3' + '\n');
console.log('\n' + ' 1. GANJIL GENAP ' + '\n');
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0 ) {
    console.log(i + ' - GENAP');
  }else {
    console.log(i + ' - GANJIL');
  }
}

console.log('\n' +' 2. KELIPATAN' + '\n');
console.log(' KELIPATAN 3' + '\n');
for (var i = 1; i <= 100; i+=2) {
  if (i % 3 === 0) {
    console.log(i +' KELIPATAN 3');
  }
}

console.log('\n' +' KELIPATAN 6' + '\n');
for (var j = 1; j <= 100; j+=5) {
  if (j % 6 === 0) {
    console.log(j +' KELIPATAN 6');
  }
}

console.log('\n' +' KELIPATAN 10' + '\n');
for (var k = 1; k <= 100; k+=9) {
  if (k % 10 === 0) {
    console.log(k +' KELIPATAN 10');
  }
}
