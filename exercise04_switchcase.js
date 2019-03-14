// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var tanggal = 1
if(tanggal<1 || tanggal>31) tanggal = "(Tanggal tidak valid, harus angka antara 1 - 31)"
// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var bulan = 5
// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tahun = 1945
if(tahun<1900 || tahun>2200) tahun = "(Tahun tidak valid, harus angka antara 1900 - 2200)"

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
    default: namabulan = "(Bulan tidak valid, harus angka antara 1-12)"
    break
}

console.log (tanggal + " " + namabulan + " " + tahun)