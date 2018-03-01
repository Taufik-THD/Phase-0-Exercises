function dataHandling2() {
  let arr = input

  arr.splice(1,1, 'Roman Alamsyah Elsyahrawi')
  arr.splice(2,1, 'Provinsi Bandar Lampung')
  arr.splice(4,0, 'Pria')
  arr.splice(5,0, 'SMA Internasional Metro')

  console.log(arr);

  let tanggal = String(arr.slice(3,4)).split('/') // [21, 05, 1989]
  let tanggalBaru = tanggal.slice(0,3);

  let bulan = tanggal[1]

  // Breaknya di dalem kurung
  switch (bulan) {
    case '01': { bulan = ' Januari ' ; break };
    case '02': { bulan = ' Februari ' ; break };
    case '03': { bulan = ' Maret ' ; break };
    case '04': { bulan = ' April ' ; break };
    case '05': { bulan = ' Mei ' ; break };
    case '06': { bulan = ' Juni ' ; break };
    case '07': { bulan = ' Juli ' ; break };
    case '08': { bulan = ' Agustus ' ; break };
    case '09': { bulan = ' September ' ; break };
    case '10': { bulan = ' Oktober ' ; break };
    case '11': { bulan = ' November ' ; break };
    case '12': { bulan = ' Desember ' ; break };

  }

  console.log(bulan);

  tanggalBaru.sort(function (a, b) {
    return b-a
  })
  console.log(tanggalBaru);

  tanggal = tanggal.join('-')
  console.log(tanggal);

  let nama = arr[1].slice(0,15)

  console.log(nama);


}

let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

dataHandling2()
