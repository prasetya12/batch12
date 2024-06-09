//Synchrounus
// console.log("Ini Baris Pertama")
// console.log("Ini Baris Kedua")
// console.log("Ini Baris Ketiga")

//Asyncrounus
// console.log("Ini Baris Pertama")
// setTimeout(() => console.log("Ini Baris Kedua"), 0)
// console.log("Ini Baris Ketiga")

//CALLBACK

function satu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return 1
            // callback(1)
            resolve(1)
        }, 1000)
    })
}

function dua(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number) {
                const sum = number + 1
                resolve(sum)
            } else {
                reject('ERROR NIH NGGA ADA PARAMETER NUMBER')
            }
        }, 1000)
    })

}

function tiga(number) {
    const min = number - 2
    return min
}

// const numOne = satu()
// console.log(numOne)
// satu().then((res) => {
//     dua().then((response) => {
//         document.write(response)
//     }).catch((error) => {
//         alert(error)
//     })
// })
// satu((res) => {
//     dua(res, (response) => {
//         tiga(response)
//     })
// })


//PROMISE
// const numOne = satu()
// dua(numOne)

//ASYNC
async function getNumber() {
    const numSatu = await satu()
    dua(numSatu).then((res) => {
        console.log(res)
    })
    // const numSatu = await satu()
    // const numDua = await dua(numSatu)
    // const numTiga = await tiga(numDua)

    // console.log(numTiga)
}

getNumber()