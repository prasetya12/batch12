import { dataSiswa } from './data.js'
// const nameIndexOne = dataSiswa[1].nama
//1. Tampilkan nama dari data tersebut di Index 1 
//Expected Result 
//'Andi Saputra'
// console.log(nameIndexOne, '1')
console.log(dataSiswa[1])



//2. Tampilkan data baru dengan hanya menampilkan {nama, jurusan} 
///Expected Result 
//[{nama:nama: 'Andi Saputra',jurusan: 'Komputer'}...]
// const newDataSiswa = dataSiswa.map((user) => {
//     return {
//         nama: user.nama,
//         jurusan: user.jurusan
//     }
// })


// const newDataBaru = dataSiswa.map((siswa, index) => {
//     const siswaConvert = {
//         nama: siswa.nama,
//         jurusan: siswa.jurusan
//     }

//     return siswaConvert

// })

// const newDataBaru = dataSiswa.map((siswa, index) => {
// return {
//     nama: siswa.nama,
//     jurusan: siswa.jurusan
// }

// })

// const data = 
const newDataBaru = dataSiswa.map((siswa) => {
    return {
        nama: siswa.nama,
        jurusan: siswa.jurusan
    }
})


// console.log(newDataSiswa, '2')
console.log(dataSiswa)
//3. Tampilkan beberapa data dengan format string sbb dari data diatas:
//"Nama {Andi Saputra} mendapatkan nilai Matematika sebesar ${nilai}"
// dataSiswa.forEach((item) => {
//     const textFormat = `Nama ${item.nama} mendapatkan nilai Matematika sebesar ${item.nilai.matematika}`
//     console.log(textFormat)
// })
dataSiswa.forEach((siswa) => {
    const textFormat = `Nama ${siswa.nama} mendapatkan nilai Matematika sebesar ${siswa.nilai.matematika}`
    console.log(textFormat)
})

const addField = dataSiswa.map((siswa) => {
    const textFormat = `Nama ${siswa.nama} mendapatkan nilai Matematika sebesar ${siswa.nilai.matematika}`

    return {
        ...siswa,
        text_raport: textFormat
    }
})




//4. Tampilkan nama berdasarkan nomor absen , misal 1, akan keluar data nama yang absen 1 
const noAbsen = 8
const getDataByAbsen = dataSiswa.find((siswa) => siswa.no_absen == noAbsen)

console.log(getDataByAbsen)
//5. Ada berapa siswa yang mendapatkan nilai matematika diatas atau sama dengan 75
const getDataSiswaAverage = dataSiswa.filter((siswa) => siswa.nilai.matematika <= 75)



console.log(getDataSiswaAverage.length)

// const getDataSiswaMap = dataSiswa.map((siswa) => {
//     if (siswa.nilai.matematika >= 75) {
//         return {
//             ...siswa
//         }
//     }
// })
const dataMapBaru = []
dataSiswa.forEach((siswa) => {
    if (siswa.nilai.matematika >= 75) {
        dataMapBaru.push(siswa)
    }
})

console.log(dataMapBaru.length, 'map')




//5. Tampilkan data yang berjurusan Komputer dengan format berikut 
//{nama, jurusan}
// const getDataSiswaByJurusan = dataSiswa.filter((siswa) => siswa.jurusan == "Komputer")
// console.log(getDataSiswaByJurusan)


//6. Tampilkan data rata rata nilai pada browser/tampilan html berdasarkan nomor absen yang diinputkan pada dialog
window.onload = function () {


    //1. Function dappetin rata rata
    function getAverage(matematika, b_indo, b_inggris) {
        const sum = matematika + b_indo + b_inggris
        const score = sum / 3
        // return Math.round(sum / 3)

        //
        return Number(score.toFixed(2))
    }
    //2. Manipulasi datasiswa dengan menambah field baru dan value didapat dari function rata rata
    const dataSiswaRaport = dataSiswa.map((siswa) => {
        return {
            ...siswa,
            nilai_rata_rata: getAverage(siswa.nilai.matematika, siswa.nilai.b_indo, siswa.nilai.b_inggris)
        }
    })

    //3. Bikin dialog untuk dapeting no_absen
    const noAbsen = prompt("Masukan Nomor Absen")
    const convertNoAbsen = Number(noAbsen)
    console.log(noAbsen, 'no')
    //4. bikin array baru nge- find data dari no_absen dialog
    const getSiswaByAbsen = dataSiswaRaport.find((siswa) => siswa.no_absen == convertNoAbsen)
    //5. munculkan di html
    if (getSiswaByAbsen) {
        document.write(`Nama ${getSiswaByAbsen.nama} mendapatkan nilai ${getSiswaByAbsen.nilai_rata_rata}`)
    } else {
        alert('Nomor absen tidak ditemukan')
    }
}

//string to number
const num = "80.800"
//parseInt
// console.log(parseInt(num))
//parseFloat
// console.log(Number(num))


