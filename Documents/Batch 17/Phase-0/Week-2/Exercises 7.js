var rows1 = 5
var tmp = ''
for (var i = 0; i < rows1; i++) {
  tmp = '*'
  console.log(tmp);
}

var rows2 = 5
var tmp2 = ''
for (var i = 0; i < rows2; i++) {
  tmp2 = ''
  for (var j = rows2; j < 10; j++) {
    tmp2 += '*'
  }
  console.log(tmp2);
}

var rows3 = 5
var tmp3 = ''
for (var i = 0; i <= rows3; i++) {
  tmp3 = ''
  for (var j = 0; j < i; j++) {
    tmp3 += '*'
  }
  console.log(tmp3);
}
