console.log('hello');

const progressBar = document.querySelector(".progressBar");
const progressIcon = document.querySelector(".progressIcon");
const progressAfter = document.querySelector(".progress::after");

window.addEventListener("scroll" , ()=>{

    let h = document.documentElement;

    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let percent = st / (sh - h.clientHeight) * 100 ;

    let roundPercent = Math.round(percent);


    progressIcon.style.top = `${percent}%`;
    progressBar.style.height = `${percent}%`;

    progressIcon.innerHTML =`${roundPercent}`

    if (roundPercent===100) {
        progressAfter.style.border = `4px solid rgb(57, 57, 57)` ;
    }



})


// let h = document.documentElement;

//     let st = h.scrollTop || document.body.scrollTop;
//     let sh = h.scrollHeight || document.body.scrollHeight;

//     let percent = st / (sh - h.clientHeight) * 100 ;

//     console.log(st);
//     console.log(sh);
//     console.log(h.clientHeight);
//     console.log(h);