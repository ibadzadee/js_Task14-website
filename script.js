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