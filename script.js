let openCatalog = document.querySelector("#banner .openCatalog")
window.addEventListener("DOMContentLoaded", () => {
    openCatalog.style.scale = "1"
})

let menu = document.querySelector(" .bi-list")
let menuList = document.querySelector(".menu-lists")

console.log(menu);
console.log(menuList);
menu.addEventListener("click", () => {
    if (menuList.style.display == "none") {
        menuList.style.display = "block"
    }
    else {
        menuList.style.display = "none"
    }
    menu.style.transition = "all 1s ease"

})

let cardBasket = document.querySelector(".card-basket")
let bannerModal = document.querySelector(".banner-modal")
cardBasket.addEventListener("click", () => {
    bannerModal.style.visibility = "visible"
})

let x = document.querySelector(".bi-x-lg")
x.addEventListener("click", () => {
    bannerModal.style.visibility = "hidden"

})

let mouseIcon = document.querySelector(".bi-mouse");
mouseIcon.addEventListener("click", () => {
    window.scrollTo({
        top: 650,
        behavior: 'smooth',
    });
});


// stuffed-animals
let cardDiv = document.querySelector('.stuffed-animals .card-div')
const cards = [
    {
        image: "./teddy.png",
        name: "Teddy Bear",
        cost: "$ 30.000 USD"
    },

    {
        image: "./plush.png",
        name: "Mega Plush Toy",
        cost: "$ 38.000 USD"
    },

    {
        image: "./doggy.png",
        name: "Cute Dog",
        cost: "$ 24.000 USD"
    },

    {
        image: "./friend.png",
        name: "Little Friend",
        cost: "$ 27.000 USD"
    }
]

cards.forEach(item => {
    cardDiv.innerHTML += `
        <div class="cards">
                <img src="${item.image}" alt="">
                <h3>${item.name}</h3>
                <button>${item.cost}</button>
            </div>
    `
})

// wooden-toys
let cardDivWooden = document.querySelector('.wooden-toys .card-div')
const cardsWooden = [
    {
        image: "./flower.png",
        name: "Teddy Bear",
        cost: "$ 30.000 USD"
    },

    {
        image: "./machine.png",
        name: "Mega Plush Toy",
        cost: "$ 38.000 USD"
    },

    {
        image: "./camera.png",
        name: "Cute Dog",
        cost: "$ 24.000 USD"
    },

    {
        image: "./bunny.png",
        name: "Little Friend",
        cost: "$ 27.000 USD"
    }
]

cardsWooden.forEach(item => {
    cardDivWooden.innerHTML += `
        <div class="cards">
                <img src="${item.image}" alt="">
                <h3>${item.name}</h3>
                <button>${item.cost}</button>
            </div>
    `
})


