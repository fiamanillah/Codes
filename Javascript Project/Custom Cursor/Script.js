const cursorDot = document.querySelector(".cursorDot");
const cursorOutline = document.querySelector(".cursorOutline");


window.addEventListener('mousemove', (e)=>{
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    },{duration: 500, fill: "forwards"})
    
})


window.addEventListener("click", (e)=>{
    const body = document.getElementById("body");
    const cursorClickDiv = document.createElement("div");
    cursorClickDiv.classList.add("cursorClickEffect");
    cursorClickDiv.style.left = `${e.clientX}px`
    cursorClickDiv.style.top = `${e.clientY}px`
    body.appendChild(cursorClickDiv);
    setTimeout(()=>{
        cursorClickDiv.remove();
    }, 500)


    // cursorOutline.animate([
    //     {
    //         transform: `scale(2) translate(-25%, -25%)`
    //     },{
    //         transform: `scale(1) translate(-50%, -50%)`
    //     }
    // ],{duration: 200, fill: "forwards"})


    // cursorOutline.style.transform= `scale(2) translate(-25%, -25%)` 
    // setTimeout(()=>{
    //     cursorOutline.style.transform= `scale(1) translate(-50%, -50%)` 
    // }, 100)

})



