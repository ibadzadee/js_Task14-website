let openCatalog = document.querySelector("#banner .openCatalog")
window.addEventListener("DOMContentLoaded" ,()=>{
    openCatalog.style.scale = "1"
})

let menu = document.querySelector(".card-basket .bi-list")
let menuList = document.querySelector(".menu-lists")

console.log(menu);
console.log(menuList);
menu.addEventListener("click" , ()=>{
    if(menuList.style.display == "none"){
        menuList.style.display = "block"
    }
    else{
        menuList.style.display = "none"
    }
    menu.style.transition = "all 1s ease"

})

let cardBasket = document.querySelector(".card-basket")
let bannerModal = document.querySelector(".banner-modal")
cardBasket.addEventListener("click" ,()=>{
    bannerModal.style.visibility = "visible"
})

let x = document.querySelector(".bi-x-lg")
x.addEventListener("click" , ()=>{
    bannerModal.style.visibility = "hidden"

})
