
//advanteges
//- reusable code
//- easy readability
//- Reduce load time
// alert('Saya file terpisah')

/*console.log('Hello World')
console.log('Hello')*/

//Variable
var x = 10
let y = 10

const result = x + 100
// console.log(result)


y = "world"
// console.log(y)


const z = 123
// console.log(z)


// const 12z = 123
// const hello world =123
// const user-name =rizal
// const let = 123

//CAMEL CASE ATAU SNACK CASE
const userName = "rizal"
const user_name = "rizal"

//TIPE DATA
//1. Tipe Data Primitif
//- String
const username = "rizal"
const name = 'rizal'
const hari = "jum'at"

const firstName = "Cristiano"
const lastName = "Ronaldo"

const fullName = firstName + " " + lastName

//template literal
const newFullName = `${firstName} ${lastName}`
// console.log(newFullName, 'new')


//- Number
const numberX = 10
const numberY = -10
const decimalZ = 2.4
//- Infinity
const infinityNumber = 5 / 0

//Nan (Not a number)
const hasil = firstName * numberX


//- Boolean
//TRUE and FALSE
const isNight = false

// console.log(isNaN(numberX))

// console.log(isNight)
//- Undefined
let numberA;
// console.log(numberA)

//- Null
let numberB = null
// console.log(numberB)


//2. Tipe Data Non Primitif
//- Object
const user = {
    nama: "Messi",
    umur: 35,
    email: 'messi@gmail.com',
    nilai: [90, 80, 70],
    mobil: {
        merk: "Avanza",
        seri: "AB-123"
    }
}

// console.log(user, 'sebelum diubah')

// const newNama = prompt("Masukan Nama")
// user.nama = newNama
// console.log(user, 'setelah diubah')


user.nama = "Messi Indo"
user.nilai[0] = 100
// console.log(user)


// console.log(user.nilai[1])
// console.log(user.mobil.seri)


// const hp ={
//     merk:"Android",
//     layar
// }
//- Array (index)
// const arr = ['rizal', 20, undefined, null]

// const users = [{ nama: "Messi", umur: 35 }, { nama: "Ronaldo", umur: 40 }]


//NUM TYPE CONVERSION

//Number
const numA = "20"
const numB = 40
console.log(Number(numA) + numB)

//String
const umur = 20
const tambahUmur = 10
console.log(String(umur) + tambahUmur)

//Boolean

const num1 = 0
const num2 = 1
console.log(Boolean(num2))

//OPERATOR
//- Aritmatika
const penjumlahan = 2 + 3;
const pengurangan = 5 - 2;
const perkalian = 2 * 5;
const pembagian = 6 / 2
const modulus = 9 % 4
const exponensial = 2 ** 3
let increment = 2
// increment = increment + 1
// increment++
console.log(increment)
//- Penugasan 
//=
let num = 10
//+=
// num = num + 2
// num += 10

//-=
num = num - 2
num -= 2
// num += 10
console.log(num)

// console.log(increment)
//- Logika
// && (AND)
// || (OR)
// !(NEGASI)

const sudahBelajar = true
const sudahMakan = false

//&& (AND)
if (sudahBelajar && sudahMakan) {
    console.log('tidur')
}

//|| (OR)
if (sudahBelajar || sudahMakan) {
    console.log('tidur cepat')
}

//!(negasi)
if (!sudahMakan) {
    console.log("Sudah Makan")
}

//- Perbandingan
const a = 9
const b = '9'

const c = 10
const d = 10
//==
// console.log(a == b)
//=== (dicek tipe data)
// console.log(a === b)

// console.log(a != b) //sama
// console.log(a !== b) //beda

console.log(c < d)
console.log(d > c)
console.log(c <= d)
console.log(d >= c)

//- Ternary
const sudahNgopi = false
//kondisi ? jikaBenar :jika Salah

const hasilNgopi = sudahNgopi ? console.log("Sudah Ngopi") : sudahMakan ? console.log("Sudah Makan") : console.log("Belum Ngopi & Belum Makan")

if (sudahNgopi) {
    console.log("Sudah Ngopi")
} else {
    console.log("Belum Ngopi")
}


//MATH
//Math
//abs
const nilai = -100
const nilaiPositif = Math.abs(nilai)
console.log(nilaiPositif)

//pow
const nilaiC = 2
const pangkatC = Math.pow(nilaiC, 2)
console.log(pangkatC)

//sqrt
const nilaiD = 90
const squareRoot = Math.sqrt(nilaiD)

//Pembulatan
//floor
const nilaiE = 100.5
const floorNilai = Math.floor(nilaiE)
// console.log()

//ceil
const ceilNilai = Math.ceil(nilaiE)
console.log(ceilNilai)

//round
const roundNilai = Math.round(nilaiE)

let nilaiUang = 250000
if (nilaiUang >= 250000 && nilaiUang <= 300000) {
    nilaiUang = 300000
}

console.log(roundNilai)


//Random
// 0 < x < 1
const randomNumber = Math.random() * 20
const randomBulat = Math.floor(randomNumber)


//Antara 20 - 25
const randomBetween = Math.floor(Math.random() * 5) + 20
console.log(randomBetween, 'random')







