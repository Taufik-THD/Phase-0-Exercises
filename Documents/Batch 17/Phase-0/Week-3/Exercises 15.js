function groupAnimals(animals) {
  // you can only write your code here!

  let hasil = []
  let isi = []
  let sortAnimals = animals.sort()

  for (var i = 0; i < animals.length; i++) {
    isi.push(animals[i])
    if (i !== animals.length-1) {
      if (animals[i][0] !== (animals[i+1][0])) {
        hasil.push(isi)
        isi = []
      }
    }
     else {
      hasil.push(isi)
      isi = []
    }
  }
  return hasil

}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
















// let hasil = []

// animals.sort()


// return hasil
// console.log(newArr);

// animals = animals.sort();
// let currentarr = 0;
// let newanimal = [[]];

// Gak guna xD
// animals.map((each, i) => {
//   let index = Math.max(i-1, 0)
//   if (each[0] !== animals[index][0]) {
//     newanimal.push([each])
//     currentarr++
//   } else if (each[0] === animals[index][0]) {
//     newanimal[currentarr].push(each)
//   }
// })
// []
// return newanimal
