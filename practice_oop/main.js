// class Mobil {
//     constructor(nama, warna, berat, model, harga, qty) {

//         this.nama = nama
//         this.warna = warna
//         this.berat = berat
//         this.model = model
//         this.harga = harga
//         this.qty = qty
//     }

//     displayName() {
//         document.write(this.nama)
//     }

//     displayJumlahHarga() {
//         const jumlahHarga = this.harga * this.qty
//         document.write(jumlahHarga)
//     }
// }


// const mobil1 = {
//     nama: "Honda",
//     warna: "Kuning"
// }
// const mobil1 = new Mobil("Honda", "Kuning", "900kg", "Jazz", 9000, 2)

// mobil1.displayJumlahHarga()
// const mobil2 = {
//     nama_mobil: "Toyota",
//     color: "Merah"
// }
// const mobil2 = new Mobil("Toyota", "Merah", "700kg", "Yaris", 10000, 3)
// mobil2.displayJumlahHarga()
// mobil2.displayName()


//CARA 1
// let count1 = 0
// let count2 = 0
// const button1Elm = document.getElementById('button1')
// const button2Elm = document.getElementById('button2')

// const display1Elm = document.getElementById('display1')
// const display2Elm = document.getElementById('display2')

// button1Elm.addEventListener('click', function () {
//     count1++
//     display1Elm.innerHTML = count1
// })

// button2Elm.addEventListener('click', function () {
//     count2++
//     display2Elm.innerHTML = count2
// })


//CARA 2
// function createCounter(buttonId, displayId) {
//     let count = 0

//     const button = document.getElementById(buttonId)
//     const display = document.getElementById(displayId)

//     button.addEventListener('click', function () {
//         count++
//         display.innerHTML = count
//     })
// }


// createCounter('button1', 'display1')
// createCounter('button2', 'display2')

// const now = new Date()
// console.log(now.getTime())

//CARA 3
class Counter {
    constructor(buttonId, displayId) {
        this.count = 0

        this.button = document.getElementById(buttonId)
        this.display = document.getElementById(displayId)

        this.button.addEventListener('click', () => this.increment())

    }

    increment() {
        this.count++
        this.updateDisplay()

    }

    updateDisplay() {
        this.display.innerHTML = this.count
    }
}

const jumlah = new Counter('button1', 'display1')
const jumlah1 = new Counter('button2', 'display2')
const jumlah3 = new Counter('button3', 'display3')
const jumlah4 = new Counter('button4', 'display4')






