const passBtn = document.getElementById("passwordBtn");
const hide1 = document.getElementById("hide1");
const hide2 = document.getElementById("hide2");
const passBox = document.getElementById("passBox")


passBtn.addEventListener('click' , ()=>{

    if(passBox.type === 'password'){
        passBox.type = "text";
        hide1.style.display= "block";
        hide2.style.display= "none";

    }
    else{
        passBox.type = "password";
        hide1.style.display= "none";
        hide2.style.display= "block";
    }
})