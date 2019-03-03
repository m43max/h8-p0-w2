function balikKata(kata) {
    var backwards = ""
    for (i=0; i<kata.length; i++){
        backwards += kata[kata.length-(i+1)] //iterate over ith (from left to right) character of the function parameter; then add ith-to-last character to the empty "backwards" variable
    }
    return backwards
  }

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS