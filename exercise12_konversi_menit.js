function konversiMenit(menit) {
if(menit%60<10){
    var min = "0" + menit%60 //added "0" for single digit minutes so output always has 2 digits for minutes
}
else{
    var min = menit%60
}
var hour = Math.floor(menit/60) //rounded down to whole hour
return hour + ":" + min
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00