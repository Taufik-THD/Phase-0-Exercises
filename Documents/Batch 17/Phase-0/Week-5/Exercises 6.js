function meleeRangedGrouping (str) {
  //your code here
  let splitted = str.split(',')
  let result = [[], []]

  if (str.length === 0) {
    return []
  }

  for (var i = 0; i < splitted.length; i++) {

    splitted[i] = splitted[i].split('-')

    if (splitted[i][1] === 'Ranged') {
      result[0].push(splitted[i][0])
    }else {
      result[1].push(splitted[i][0])
    }

  }

  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
