function paymentSummary(paymentTypes) {
  // Code here

  let cash = 0
  let debit = 0
  let credit = 0

  for (var i = 0; i < paymentTypes.length; i++) {

    if (paymentTypes[i] === 'CASH') {
      cash += 1
    } else if (paymentTypes[i] === 'CREDIT') {
      credit += 1
    } else {
      debit += 1
    }

  }

if (paymentTypes.length == 0) {
  return 'I AM NOT SURE!'
}

if (cash > credit && cash > debit) {
  return 'MOSTLY CASH'
} else if (debit > credit && debit > cash) {
  return 'MOSTLY DEBIT'
}else {
  return 'MOSTLY CREDIT'
}

}

// TEST CASES
console.log(paymentSummary(['CASH', 'CASH', 'DEBIT'])); // "MOSTLY CASH"
console.log(paymentSummary(['CREDIT', 'CASH', 'DEBIT', 'CREDIT'])); // "MOSTLY CREDIT"
console.log(paymentSummary(['DEBIT', 'DEBIT', 'DEBIT'])); // "MOSTLY DEBIT"
console.log(paymentSummary(['CASH'])); // "MOSTLY CASH"
console.log(paymentSummary([])); // "I AM NOT SURE!"
