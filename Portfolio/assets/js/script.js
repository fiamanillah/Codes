// Header 

const menuBtn = document.querySelector(".menuBtn"),
    menuIcon = document.querySelector(".menuBtn span"),
    navMenu = document.querySelector(".navMenu"),
    navLinks = document.querySelectorAll(".navMenu ul li a"),
    sections = document.querySelectorAll("section");


menuBtn.onclick= ()=>{

    navMenu.classList.toggle("active");

    if (menuIcon.innerText === "menu") {
        menuIcon.innerText = "close"
    } else {
        menuIcon.innerText = "menu"
    }

}

window.onscroll = ()=>{
    sections.forEach( sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach( link =>{
                link.classList.remove('active');
                document.querySelector(`.navMenu ul li a[href*=${id}]`).classList.add("active")
            }

            )
        }


    }

    )
}



// var typed = new Typed('.type', {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 60,
//     smartBackspace: true,
//     loop: true,
//     loopCount: Infinity,
//     backSpeed: 50
// });






// Cursor code
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
    const body = document.querySelector("body");
    const cursorClickDiv = document.createElement("div");
    cursorClickDiv.classList.add("cursorClickEffect");
    cursorClickDiv.style.left = `${e.clientX}px`
    cursorClickDiv.style.top = `${e.clientY}px`
    body.appendChild(cursorClickDiv);
    setTimeout(()=>{
        cursorClickDiv.remove();
    }, 500)


    cursorOutline.animate([
        {
            transform: `scale(2) translate(-25%, -25%)`
        },{
            transform: `scale(1) translate(-50%, -50%)`
        }
    ],{duration: 200, fill: "forwards"})


    // cursorOutline.style.transform= `scale(2) translate(-25%, -25%)` 
    // setTimeout(()=>{
    //     cursorOutline.style.transform= `scale(1) translate(-50%, -50%)` 
    // }, 100)

})







