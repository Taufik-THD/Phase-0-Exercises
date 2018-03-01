function attack (damage) {
  // Code disini
  return damage

}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  let totalDamage = numberOfAttacks * (damagePerAttack-2)

  return attack(totalDamage)

}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
