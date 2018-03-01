function shoppingTime(memberId, money) {
  // you can only write your code here!
  const object = {}
  let isiDompetSekarang = money
  const daftarYangBisaDibeli = []
  // const list = [
  //               ['Sepatu brand Stacattu', 1500000],
  //               ['Baju brand Zoro', 500000],
  //               ['Baju brand H&N', 250000],
  //               ['Sweater brand Uniklooh', 175000],
  //               ['Casing Handphone', 50000]
  //              ]
  const list = [
                {
                  product: 'Sepatu Stacattu',
                  price: 1500000
                },
                {
                  product: 'Baju brand Zoro',
                  price: 500000
                },
                {
                  product: 'Baju brand H&N',
                  price: 250000
                },
                {
                  product: 'Sweater brand Uniklooh',
                  price: 175000
                },
                {
                  product: 'Casing Handphone',
                  price: 50000
                },
              ]

  object.memberId = memberId
  object.money = money
  object.listPurchased = daftarYangBisaDibeli
  object.changeMoney = isiDompetSekarang

  if (memberId === '' || memberId === undefined && money === undefined) {

    return 'Mohon maaf, toko X hanya berlaku untuk member saja'

  }else if (isiDompetSekarang < 50000) {

    return 'Mohon maaf, uang tidak cukup'

  }else {

    for (var i = 0; i < list.length; i++) {

      if (list[i].price <= isiDompetSekarang) {

        isiDompetSekarang -= list[i].price
        daftarYangBisaDibeli.push(list[i].product)

      }

    }

  }

  return object

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
