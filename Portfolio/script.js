window.addEventListener("scroll", ()=>{
    document.querySelector(".nav").classList.toggle("sticky", window.scrollY > 0)
})



const MenuBtn = document.querySelector(".toggleBtn");
const Menu = document.getElementById("menu");
MenuBtn.addEventListener("click", ()=>{
    MenuBtn.classList.toggle("open");
    Menu.classList.toggle("show")
})

