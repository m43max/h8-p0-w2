console.log("Part 1\n")

console.log("LOOPING PERTAMA")
var i=2
while (i<21){
    console.log (i + " - I love coding")
    i+=2
}
console.log("LOOPING KEDUA")
var a=20
while (a>1){
    console.log (a + " - I will become fullstack developer")
    a-=2
}

console.log("\nPart 2\n")

console.log("LOOPING PERTAMA")
for(var i=1; i<21; i++){
    console.log (i + " - I love coding")
}
console.log("LOOPING KEDUA")
var a=20
for(var i=20; i>0; i--){
    console.log (i + " - I will become fullstack developer")
}

console.log("\nPart 3\n")

for(var i=1; i<=100; i++){
if (i%2===0){
    console.log(i + " GENAP")
}
else {console.log(i + " GANJIL")
}
}

console.log("")

for(var i=1; i<=100; i+=2){
if (i%3===0){
    console.log(i + " KELIPATAN 3")
}
}

console.log("")

for(var i=1; i<=100; i+=5){
if (i%6===0){
    console.log(i + " KELIPATAN 6")
}
}

console.log("")

for(var i=1; i<=100; i+=9){
if (i%10===0){
    console.log(i + " KELIPATAN 10")
}
}