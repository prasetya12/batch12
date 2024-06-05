// const hari = 3; //senin selasa rabu

// switch (hari) {
//     case 1: //===
//         console.log("Senin")
//         break;
//     case 2:
//         console.log("Selasa")
//         break;
//     case 3:
//         console.log("Rabu")
//     case 4:
//         console.log("Kamis")
//     case 5:
//         console.log("Jumat")
//         break;
//     case 6:
//         console.log("Sabtu")
//         break;
//     case 7:
//         console.log("Minggu")
//         break;
//     default:
//         console.log('Maaf , angka harus 1-7')
//         break;

// }

const hari = 'senin'; //senin selasa rabu

switch (hari) {
    case 'senin': //===
    case 'selasa':
    case 'rabu':
    case 'kamis':
    case 'jumat':
        console.log("Hari Sekolah")
        break;
    case 'sabtu':
    case 'minggu':
        console.log("Hari Libur")
        break;
    default:
        console.log('Maaf , angka harus 1-7')
        break;

}


//LOOPING
const buah = ['nanas', 'semangka', 'pepaya', 'rambutan', 'manggis', 'timun']

//panjang array

//FOR 
for (let nilaiAwal = 0; nilaiAwal <= buah.length - 1; nilaiAwal++) {
    console.log(`ini buah ${buah[nilaiAwal]}`)
}


//carilah angka genap
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenAngka = []

// for(nilaiawal;expresi;change nilai awal){
//     action
// }
for (let nilaiAwal = 0; nilaiAwal < angka.length; nilaiAwal++) {
    if (angka[nilaiAwal] % 2 !== 0) {
        evenAngka.push(angka[nilaiAwal])
    }
}


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(`${i}.${j}`)
    }
}

//For of  (Array)
const fruits = ['pisang', 'mangga', 'apel']

for (let fruit of fruits) {
    console.log(fruit)
}

const users = [{ nama: 'Messi', age: 20 }, { nama: 'Ronaldo', age: 25 }]

for (let user of users) {
    const { nama, age } = user
    const content = `Nama :${nama} Umur:${age}`
    console.log(content)
}

// For In (Object)

const mobil = {
    merk: "Avanza",
    tahun: 2010,
    warna: "Merah",
    seri: "G-100",
    roda: 4
}


// if(){

// }else{}
// for(){}
// switch(){}
// while(){}



//INI AVANZA TAHUN 2010 WARNA MERAH
// const { merk, tahun, warna,roda } = mobil
// const content = `Merk: ${merk} TAHUN :${tahun} WARNA :${warna} seri Roda:${}`
console.log(mobil, 'mobil')
let content = ''
for (let key in mobil) {
    content += `${key}  ${mobil[key]} `
}

console.log(content)

//WHILE
// let n = 1
// while (n <= 5) {
//     console.log(`${n}.hello world`)
//     n++;
// }

let isLoop = true;
let count = 0

// while (isLoop) {
//     const jawaban = prompt('Tahun Berapa Indonesia Merdeka')
//     console.log(jawaban, 'jawaban')
//     if (jawaban == null) {
//         isLoop = false
//         break
//     }
//     console.log(jawaban)
//     if (jawaban === '1945') {
//         alert("Jawaban Benar")
//         isLoop = false
//         break
//     } else {
//         alert("Jawaban Salah")

//     }
//     count += 1
//     isLoop = confirm('Main Lagi ?')
// }

do {
    const jawaban = prompt('Tahun Berapa Indonesia Merdeka')
    // console.log(jawaban, 'jawaban')
    if (jawaban == null) {
        isLoop = false
        break
    }
    console.log(jawaban)
    if (jawaban === '1945') {
        alert("Jawaban Benar")
        isLoop = confirm('Main Lagi ?')
        isLoop = false
        break
    } else {
        // alert("Jawaban Salah")

    }
    count += 1
    // 
} while (isLoop)


alert(count)









// console.log('ini buah nanas')
// console.log('ini buah semangka')
// console.log('ini buah pepaya')
// console.log('ini buah rambutan')

let isNight = true

// if (isNight)
//     console.log('Sekarang Sudah Malam')
// else
//     console.log('Sekarang Siang')
// if (isNight) {
//     console.log('Sekarang Sudah Malam')
// } else {
//     console.log("Sekarang Siang")

// }





