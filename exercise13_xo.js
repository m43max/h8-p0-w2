function xo(str){
    var xCount = 0 //Counter for character "x" in parameter
    var oCount = 0 //Counter for character "o" in parameter
    for(var i=0;i<str.length;i++){
        if(str[i]==="x"){
            xCount++
        }
        if(str[i]==="o"){
            oCount++
        }
    }
    //console.log("xcount = " + xCount + " | ocount = " + oCount + " | input = " + str + " | returned = ") //tool for testing counter
if (xCount === oCount){
    return true
}
else{
    return false
}
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

