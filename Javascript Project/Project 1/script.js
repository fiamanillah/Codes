const pannels = document.querySelectorAll(".pannel");

pannels.forEach((pannel) => {
    pannel.addEventListener("click", ()=>{
        removeClass();
        pannel.classList.add("active");
    })
})

removeClass= () => {
    pannels.forEach(pannel=>{
        pannel.classList.remove("active");
    })
}
