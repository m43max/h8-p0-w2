console.log("Part 1")

var rows1 = 5 // input the number of rows
for(var i=0; i<rows1; i++){
    console.log("#")
}

console.log("\nPart 2")

var rows2 = 5 // input the number of rows
for(var i=0; i<rows2; i++){
    var line = ""
    for(var j=0; j<rows2; j++){
        line+= "#"
    }
    console.log(line)    
}

console.log("\nPart 3")

var rows3 = 5 // input the number of rows
for(var k=0; k<rows3; k++){
    var line = ""
    for(var l=0; l<=k; l++){
        line+= "#"
    }
    console.log(line)    
}
