var nama = "Midas"
var peran = "Ksatria"

if (nama===""){
    console.log ("Nama harus diisi!")
}
else if (peran===""){
    console.log ("Halo " + nama + ", pilih peranmu untuk memulai game!")
}
else if (peran==="Ksatria" || peran==="ksatria"){
    console.log ("Selamat datang di Dunia Proxytia, " + nama)
    console.log ("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!")
}
else if (peran==="Tabib" || peran==="tabib"){
    console.log ("Selamat datang di Dunia Proxytia, " + nama)
    console.log ("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
}
else if (peran==="Penyihir" || peran==="penyihir"){
    console.log ("Selamat datang di Dunia Proxytia, " + nama)
    console.log ("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
}
else {
    console.log ("Selamat datang di Dunia Proxytia, " + nama)
    console.log ("Halo " + peran + " " + nama + ", petualangan anda akan dimulai!")
}