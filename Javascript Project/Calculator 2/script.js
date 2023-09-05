

const btns = document.querySelectorAll(".btn1"),
    input = document.getElementById("input");



btns.forEach( btn =>{
    btn.onclick = ()=>{
        input.value += btn.innerText
    }
})

