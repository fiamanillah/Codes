const loginBtn = document.getElementById("log-in");
const signupBtn = document.getElementById("sign-up");
const form = document.querySelector(".form-container");



loginBtn.addEventListener("click", ()=>{
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    form.classList.add("slide-form");
});


signupBtn.addEventListener("click", ()=>{
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    form.classList.remove("slide-form");
});

