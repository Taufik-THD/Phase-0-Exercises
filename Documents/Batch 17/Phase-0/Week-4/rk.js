function formTrainSeating(passengers) {
  // only write code here

  let gerbong = [[], [], [], [], []]

  for (var i = 0; i < passengers.length; i++) {
    if (passengers[i] === 'A') {
      gerbong[0].push(passengers[i])
    }else if (passengers[i] === 'B') {
      gerbong[1].push(passengers[i])
    }else if (passengers[i] === 'C') {
      gerbong[2].push(passengers[i])
    }else if (passengers[i] === 'D') {
      gerbong[3].push(passengers[i])
    }else {
      gerbong[4].push(passengers[i])
    }
  }
  return gerbong
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
