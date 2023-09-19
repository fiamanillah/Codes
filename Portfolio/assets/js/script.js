
// Cursor code
const cursorDot = document.querySelectorAll(".cursorDot");
const cursorOutline = document.querySelectorAll(".cursorOutline");


window.addEventListener('mousemove', (e)=>{
    const posX = e.clientX;
    const posY = e.clientY;


    cursorDot.forEach((el)=>{
        el.style.left = `${posX}px`;
        el.style.top = `${posY}px`;
    })


    cursorOutline.forEach((ell)=>{
        ell.animate({
            left: `${posX}px`,
            top: `${posY}px`
        },{duration: 500, fill: "forwards"})
    })

    
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


})












const projectNextBtn = document.querySelectorAll(".nextBtn");
const projectPrevBtn = document.querySelectorAll(".prevBtn");
const projectListItem = document.querySelectorAll(".projectListItem");

// console.log(projectNextBtn);
// console.log(projectListItem);
projectNextBtn.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        console.log(item);


        if (index === projectNextBtn.length-1) {
            projectListItem[index].classList.remove("active");
            projectListItem[0].classList.add("active")

        } else {
            projectListItem[index].classList.remove("active");
            projectListItem[index+1].classList.add("active")
        }


    })


})


projectPrevBtn.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        if (index === 0) {
            projectListItem[0].classList.remove("active");
            projectListItem[projectListItem.length-1].classList.add("active");
        } else {
            projectListItem[index].classList.remove("active");
            projectListItem[index-1].classList.add("active")
        }
    })
})



console.log(projectListItem);






const projectCard =document.querySelectorAll(".projectContainer a");

projectCard.forEach((el, index)=>{
   


    el.onclick = (ev)=>{
        el.classList.toggle("projectCardClick");
        // projectListItem.forEach((el1)=>{
        //     el1.classList.remove("active")
        // })
        console.log(projectListItem);

        localStorage.setItem("itemno", index)


    }

    

})

console.log(localStorage.getItem("itemno"));

// projectListItem[localStorage.getItem("itemno")].classList.add("active")
















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




























const home2CardImg = document.querySelectorAll(".homeContent_2_Card img")


let slideUp = {
    distance: '100px',
    origin: 'top',
    opacity: 0,
    delay: 100,
    duration: 1000,
    reset: false
};
ScrollReveal().reveal('.line',slideUp);
ScrollReveal().reveal('.mouseScrollBtn',slideUp);
let slideRight = {
    distance: '80px',
    origin: 'right',
    opacity: 0,
    delay: 100,
    duration: 1000,
    reset: false
};
ScrollReveal().reveal(home2CardImg,slideRight);
let slideLeft = {
    distance: '80px',
    origin: 'left',
    opacity: 0,
    delay: 100,
    duration: 1000,
    reset: false
};
ScrollReveal().reveal('.projectCard',slideLeft);





let typed = new Typed('.typedAnimation', {
    strings: ["Web Designer", "Programmer", "Blogger", "Web Developer"],
    typeSpeed: 60,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    backSpeed: 50
});





VanillaTilt.init(document.querySelectorAll(".projectCard"), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.4,
});









