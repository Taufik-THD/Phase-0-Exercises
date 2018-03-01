function changeMe(arr) {
  // you can only write your code here!

  let result = {}

  if (arr.length === 0) {
    console.log('');
  }

  for (var i = 0; i < arr.length; i++) {

    result.firstName = arr[i][0]
    result.lastName = arr[i][1]
    result.gender = arr[i][2]

    if (arr[i][3] !== undefined) {
      result.age = arr[i][3]
    }else {
      result.age = 'Invalid Birth Year'
    }

    console.log((i+1) +'. ' +arr[i][0]+' '+arr[i][1]+':');
    console.log(result);
    console.log();

  }


}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""











// var object = {}
//
// for (var i = 0; i < arr.length; i++) {
//
//      object.firstName = arr[i][0]
//      object.lastName = arr[i][1]
//      object.gender = arr[i][2]
//
//   if (arr[i][3] === undefined) {
//
//      object.age = 'Invalid Birth Year'
//
//   }else {
//
//      object.age = 2018 - arr[i][3]
//
//   }
//
//    console.log(i+1 +'. ' +arr[i][0] +' ' +arr[i][1]);
//    console.log(object);
//
// }
