window.addEventListener("scroll", ()=>{
    var Nav = document.querySelector(".nav");
    Nav.classList.toggle("sticky", window.scrollY > 100);    
})


const MenuBtn = document.querySelector(".menuBtn");
const menu = document.getElementById("menu");
MenuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("menu")
})