// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var tanggal = 5
// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var bulan = 5
// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tahun = 1967

var namabulan

switch(bulan){
    case 1: namabulan = "Januari"
    break
    case 2: namabulan = "Februari"
    break
    case 3: namabulan = "Maret"
    break
    case 4: namabulan = "April"
    break
    case 5: namabulan = "Mei"
    break
    case 6: namabulan = "Juni"
    break
    case 7: namabulan = "Juli"
    break
    case 8: namabulan = "Agustus"
    break
    case 9: namabulan = "September"
    break
    case 10: namabulan = "Oktober"
    break
    case 11: namabulan = "November"
    break
    case 12: namabulan = "Desember"
    break
    default: namabulan = "bulan"
    break
}

console.log (tanggal + " " + namabulan + " " + tahun)
