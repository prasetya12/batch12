//get data from https://fakestoreapi.com/products



//

//1. Tampilkan data dari api berikut
//2. Ubah mata uang menjadi mata uang indonesia dan format rupiah
//3. Buatkan category dengan badge yang berbeda beda sesuai dengan category tersebut
//4. Search Input


//promise
// fetch('https://fakestoreapi.com/products').then((res) => {
//     res.json().then((res) => {
//         console.log(res)
//     })
// })
function getCategory(category) {
    switch (category) {
        case "electronics":
            return ` <span
            class="bg-orange-100 py-2 px-1 rounded-md text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >${category}</span
          >`
        case "men's clothing":
            return ` <span
            class="bg-red-100 py-2 px-1 rounded-md text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >${category}</span
          >`
        case "jewelery":
            return ` <span
            class="bg-green-100 py-2 px-1 rounded-md text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >${category}</span
          >`
        case "women's clothing":
            return ` <span
            class="bg-blue-100 py-2 px-1 rounded-md text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >${category}</span
          >`
        default:
            return ` <span
            class="bg-orange-100 py-2 px-1 rounded-md text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >${category}</span
          >`
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(amount)
}

function convertUsdToIdr(usd) {
    //exchange api 
    const exchangeRate = 16000
    return usd * exchangeRate
}

async function fetchData() {
    //GET DATA DARI API
    const dataProducts = await fetch('https://fakestoreapi.com/products')
    //DATA API ,CONVERT KE BENTUK JSON (fetch)
    const dataJsonProduct = await dataProducts.json()
    return dataJsonProduct
}

function card(image, title, category, rate, price) {
    return (
        `<div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="${image}"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5
              class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
             ${title}
            </h5>
          </a>
          <div>
            ${getCategory(category)}
          </div>
          <div class="flex items-center mt-4 mb-5">
            <span
              class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
              >${rate}</span
            >
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs md:text-3xl font-bold text-gray-900 dark:text-white"
              >${formatCurrency(convertUsdToIdr(price))}</span
            >
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Add to cart</a
            >
          </div>
        </div>
      </div>`
    )
}

function listProducts(data) {
    //INITIATION parent diaman kita akan menambahkan DOM CARD
    const containerElm = document.getElementById('list_products')

    //HAPUS SEMUA DATA DIDALAM DOM element id list_products
    containerElm.innerHTML = ''

    //LOOPING DATA DARI API
    data.forEach((product) => {

        //BIKIN DOM ELEMENT
        const productElm = document.createElement('div')

        //ISI DOM ELEMENT DENGAN HTML UDAH KITA STYLING
        productElm.innerHTML = card(product.image, product.title, product.category, product.rating.rate, product.price)

        //DOM ELEMEN YANG UDAH DITAMBAH HTML , KITA MASUKAN KE parent list_products
        containerElm.appendChild(productElm)

    })
}

async function updateData() {

    //GET DATA API
    const data = await fetchData()

    listProducts(data)

}


async function onSearch() {
    const searchElm = document.getElementById('search_product')
    const value = searchElm.value

    //GET DATA API
    const data = await fetchData()

    const newData = data.filter((product) => product.title.toLowerCase().includes(value))

    listProducts(newData)

}
updateData()


