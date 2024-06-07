// alert('halo')
//DOM
//getElementByid
// const judulElm = document.getElementById('judul')
// judulElm.textContent = "Restaurant"
// judulElm.style.color = 'red'
// judulElm.style.backgroundColor = 'brown'

// const menuElm = document.getElementsByClassName('menu')

// menuElm[1].textContent = "Mie Ayam"

// const listMenuElm = document.getElementsByTagName('ul')
// console.log()
// console.log(listMenuElm)
// listMenuElm[0].children[0].textContent = "MiE aYAM"

//query selector
//id
// const judulElm = document.querySelector("#fruitList a")
// const menuElm = document.querySelectorAll(".menu")
// menuElm[0].textContent = "Mie Ayam"
// console.log(menuElm)

// const ulElm = document.querySelector("ul")

// judulElm.style.color = 'red'
// console.log(ulElm)

const fruits = [
    "Apel",
    "Jeruk",
    "Mangga",
    "Pisang"
]

const fruitListElm = document.getElementById('fruitList')

function displayFruits(fruits) {
    fruitListElm.innerHTML = ''
    fruits.forEach((fruit) => {
        const li = document.createElement("li")
        li.textContent = fruit
        fruitListElm.append(li)
    })
}

// fruits.forEach((fruit) => {
//     const li = document.createElement("li")
//     li.textContent = fruit
//     fruitListElm.append(li)
// })
displayFruits(fruits)

const searchInputElm = document.getElementById('searchInput')
const btnInputElm = document.getElementById('btnSearch')

btnInputElm.addEventListener("click", function () {
    const valueInput = searchInputElm.value.toLowerCase();
    const findFruit = fruits.filter(fruit => fruit.toLowerCase() == valueInput)

    displayFruits(findFruit)
    // fruitListElm.innerHTML = ''
    // findFruit.forEach((fruit) => {
    //     const li = document.createElement("li")
    //     li.textContent = fruit
    //     fruitListElm.append(li)
    // })
})

