function highestScore (students) {
  // Code disini

  let result = {}

  for (let i = 0; i < students.length; i++) {

    let student = {
      name: students[i].name,
      score: students[i].score,
    }

    if (result[students[i].class]) {

      if (result[students[i].class].score < student.score) {

        result[students[i].class] = student;

      }
      
    } else {

      result[students[i].class] = student;

    }

  }

  return result;

}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));
// //
// // // {
// // //   foxes: { name: 'Alexander', score: 100 },
// // //   wolves: { name: 'Alisa', score: 76 },
// // //   tigers: { name: 'Viktor', score: 80 }
// // // }
// //
// //
// console.log(highestScore([])); //{}




// let obj = {}
// let arr = []
// let tmp = []
//
// let duplicate = students.map((students) => Object.assign({}, students))
//
//
// for (let i = 0; i < duplicate.length; i++) {
//
//   for (let j = 0; j < duplicate.length; j++) {
//
//
//     if (i !== j) {
//
//       if (duplicate[i].class === duplicate[j].class) {
//
//         duplicate[j].class = ''
//
//       }
//
//     }
//
//   }
//
//   if (duplicate[i].class !== '') {
//
//     let result = {
//       name: students[i].name,
//       score: students[i].score
//     };
//
//     obj[duplicate[i].class] = result
//
//     for (let k = 0; k < students.length; k++) {
//
//       if (students[k].class === obj[duplicate[i].class].class) {
//
//         if (students[i].score > obj[duplicate[i].class].class) {
//
//           obj[students[i].class] = result
//
//         }
//
//       }
//
//     }
//
//   }
//
// }
//
// return obj
